import React, { useState, useEffect } from "react";

const ManufacturerForm = () => {

    const initialState = {
      name: "",
      picture_url: "",
      manufacturer_id: ""
    };

    const [formData, setFormData] = useState(initialState)
    const [manufacturers, setManufacturers] = useState([])


    const getData = async () => {
      const resp = await fetch("http://localhost:8100/api/manufacturers/")
      if (resp.ok) {
          const data = await resp.json()
          setManufacturers(data.manufacturers)

      }
  }

  useEffect(()=> {
      getData()
  }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8100/api/models/"
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const resp = await fetch(url, fetchConfig);
        if (resp.ok) {
            const data = await resp.json();
            setFormData(initialState);
        }
    }

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

    }
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new vehicle</h1>
          <form id="create-shoe-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.name} placeholder="Name" required className="form-control" name="name" id="name" type="text"/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.picture_url} placeholder="Picture URL" required className="form-control" name="picture_url" id="picture_url" type="url"/>
              <label htmlFor="picture_url">Picture URL</label>
            </div>
            <div className="form-floating mb-3">
              <select onChange={handleChange} value={formData.manufacturer_id} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                <option value="">Choose A Manufacturer</option>
                {manufacturers.map(manufacturer => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                  )
                })}
              </select>
            </div>
            <button onSubmit={handleSubmit}className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ManufacturerForm;
