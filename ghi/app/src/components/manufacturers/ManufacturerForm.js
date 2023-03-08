import React, { useState, useEffect } from "react";

const ManufacturerForm = () => {
    const [name, setName] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:8100/api/manufacturers/'
        const data = {};
        data.name = name;
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const resp = await fetch(url, fetchConfig);
        if (resp.ok) {
            const data = await resp.json();
            setName("");
        }
    }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new manufacturer</h1>
          <form id="create-manufacturer-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                required
                className="form-control"
                name="name"
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              <label htmlFor="name">Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ManufacturerForm;
