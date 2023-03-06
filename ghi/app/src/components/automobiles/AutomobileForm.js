import React, { useState, useEffect } from "react";
const AutomobileForm = () => {
  const [formData, setFormData] = useState({
    color: "",
    year: "",
    vin: "",
    model_id: "",
  });

  const [models, setModels] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      console.log(data.models);
      setModels(data.models);
    }
  };

    const handleSumbit = async (e) => {
        e.preventDefault()
        const url = "http://localhost:8100/api/automobiles/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const resp = await fetch(url, fetchConfig);
        if (resp.ok) {
            const data = await resp.json()
            console.log(data)
            setFormData({
                color: "",
                year: "",
                vin: "",
                model_id: "",
            });

        }
    }
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(formData)

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new automobile</h1>
            <form id="create-automobile-form" onSubmit={handleSumbit}>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="color"
                  id="color"
                  type="text"
                  onChange={handleFormChange}
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="year"
                  id="year"
                  type="year"
                  onChange={handleFormChange}
                />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="vin"
                  id="vin"
                  type="text"
                  onChange={handleFormChange}
                />
                <label htmlFor="vin">Vin</label>
              </div>
              <div className="mb-3">
                <select
                  required
                  className="form-select"
                                  onChange={handleFormChange}
                                  name="model_id"
                >
                  <option value="">Choose a Model</option>
                  {models.map((model) => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AutomobileForm;
