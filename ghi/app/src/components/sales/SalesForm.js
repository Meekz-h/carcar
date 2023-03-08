import React, { useState, useEffect } from "react";

const SalesForm = () => {
  const [salesPersons, setSalesPersons] = useState([]);
  const [purchasers, setPurchasers] = useState([]);
  const [autos, setAutos] = useState([]);
    const [formData, setFormData] = useState({
        sales_person:"",
        purchaser:"",
        vin:"",
        sale_price:"",
  })
  const fetchData = async () => {
    const urlSalesPerson = "http://localhost:8090/api/salespersons";
    const respSalesPerson = await fetch(urlSalesPerson);
    if (respSalesPerson.ok) {
      const data = await respSalesPerson.json();
      setSalesPersons(data.sales_persons);
    }

    const urlCustomers = "http://localhost:8090/api/customers";
    const respCustomers = await fetch(urlCustomers);
    if (respCustomers.ok) {
      const data = await respCustomers.json();
      setPurchasers(data.customers);
    }

    const urlAutos = "http://localhost:8090/api/autos";
    const respAutos = await fetch(urlAutos);
    if (respAutos.ok) {
      const data = await respAutos.json();
      setAutos(data.autos)

    }
  };

  useEffect(() => {
      fetchData();
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
                <select required className="form-select" name="sales_person" onChange={handleFormChange} value={formData.salesperson}>
                  <option value="">Choose a Sales Person</option>
                  {salesPersons.map((salesperson) => {
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
                <select required className="form-select" name="purchaser" onChange={handleFormChange} value={formData.purchaser}>
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
                <select required className="form-select" name="vin" onChange={handleFormChange} value={formData.vin}>
                  <option value="">Choose an Automobile</option>
                  {autos.map((auto) => {
                    if (!(auto.sold)) {
                      return (
                        <option key={auto.vin} value={auto.vin}>
                          {auto.vin}
                        </option>
                      );
                    }
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
                  value={formData.sale_price}
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
