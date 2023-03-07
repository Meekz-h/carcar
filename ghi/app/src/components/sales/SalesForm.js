import React, { useState, useEffect } from "react";

const SalesForm = () => {
  const [salespersons, setSalesPersons] = useState([]);
  const [purchasers, setPurchasers] = useState([]);
  const [autos, setAutos] = useState([]);
    const [formData, setFormData] = useState({
        sales_person:"",
        purchaser:"",
        vin:"",
        sale_price:"",
  })
  const fetchSalesPersons = async () => {
    const url = "http://localhost:8090/api/salespersons";
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setSalesPersons(data.sales_persons);
    }
  };

  const fetchPurchasers = async () => {
    const url = "http://localhost:8090/api/customers";
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setPurchasers(data.customers);
    }
  };

  const fetchAutos = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setAutos(data.autos);
    }
  };

  useEffect(() => {
    fetchAutos();
    fetchPurchasers();
    fetchSalesPersons();
  });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8090/api/sales/"
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
            console.log(data)
            setFormData({
                sales_person: "",
                purchaser: "",
                vin: "",
                sale_price: "",
            });

        }
    }

  return (
    <>
      {" "}
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new sale</h1>
            <form id="create-sale-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <select required className="form-select" name="sales_person" onChange={handleFormChange}>
                  <option value="">Choose a Sales Person</option>
                  {salespersons.map((salesperson) => {
                    return (
                      <option
                        key={salesperson.id}
                        value={salesperson.employee_number}
                      >
                        {salesperson.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select required className="form-select" name="purchaser" onChange={handleFormChange}>
                  <option value="">Choose a Purchaser</option>
                  {purchasers.map((purchaser) => {
                    return (
                      <option key={purchaser.id} value={purchaser.id}>
                        {purchaser.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select required className="form-select" name="vin" onChange={handleFormChange}>
                  <option value="">Choose an Automobile</option>
                  {autos.map((auto) => {
                    return (
                      <option key={auto.vin} value={auto.vin}>
                        {auto.vin}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="sale_price"
                  id="sale_price"
                                  type="number"
                                  onChange={handleFormChange}
                />
                <label htmlFor="sale_price">Sale Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalesForm;
