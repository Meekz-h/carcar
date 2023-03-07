import React, { useState } from "react";
const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone_number: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const resp = await fetch(url, fetchConfig);
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      setFormData({
        name: "",
        address: "",
        phone_number: "",
      });
    }
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new customer</h1>
            <form id="create-customer-form" onSubmit={handleSumbit}>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.name}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="address"
                  id="address"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.address}
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="phone_number"
                  id="phone_number"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.phone_number}
                />
                <label htmlFor="phone_number">Phone Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerForm;
