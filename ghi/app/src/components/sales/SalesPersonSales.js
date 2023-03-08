import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SalesPersonSales = () => {
  const [employeeNumber,setEmployeeNumber] = useState("");
  const [sales, setSales] = useState([]);
  const [salespersons, setSalesPersons] = useState([]);
  const [changed, setChanged] = useState(false);

  const fetchData = async () => {
    const url = "http://localhost:8090/api/salespersons";
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setSalesPersons(data.sales_persons)
    }
  }

  const fetchSalesData = async () => {
    const url = `http://localhost:8090/api/sales/${employeeNumber}`;
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setSales(data.sales);
    }
  };

  const handleChange = (e) => {
    setEmployeeNumber(e.target.value)
    setChanged(true);
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (changed) {
    fetchSalesData();
    setChanged(false);
  }

  return (
    <>
          <div className="shadow p-4 mt-4">
            <h1>Sales person history</h1>

              <div className="form-floating mb-3">
              <select required className="form-select" name="vin" onChange={handleChange} >
                <option value="">Select a sales person</option>
                {
                  salespersons.map(salesperson => {
                    return (
                      <option key={salesperson.employee_number} value={salesperson.employee_number}>
                      {salesperson.name}
                    </option>
                    );
                  })
                }
              </select>
              </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sales Person</th>
                  <th>Purchaser</th>
                  <th>VIN</th>
                  <th>Sales Price</th>
                </tr>
              </thead>

              <tbody>
                {sales.map((sale) => {
                  return (
                    <tr key={sale.id}>
                      <td>{sale.sales_person.name}</td>
                      <td>{sale.purchaser.name}</td>
                      <td>{sale.vin.vin}</td>
                      <td>${sale.sale_price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
    </>
  );
};
export default SalesPersonSales;
