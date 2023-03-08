import React, { useState, useEffect } from "react";

const TechniciansForm = () => {
    const initialState = {
      name:"",
      employee_number:"",
    }
    // const [technician, setTechnician] = useState([]);
    const [formData, setFormData] = useState(initialState)


    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:8080/api/technicians/'
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
            console.log(data)
            setFormData(initialState);
        }
    }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Technician</h1>
          <form id="create-technician-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.name} required className="form-control" name="name" id="name" type="text"/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.employee_number} required className="form-control" name="employee_number" id="employee_number" type="text"/>
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TechniciansForm;
