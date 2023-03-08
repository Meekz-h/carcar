import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const SalesList = () => {
  const [sales, setSales] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8090/api/sales/";
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setSales(data.sales);
    }
  };
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

          <div className="shadow p-4 mt-4">
            <h1>Sales</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sales Person</th>
                  <th>Employee Number</th>
                  <th>Purchaser</th>
                  <th>VIN</th>
                  <th>Sales Price</th>
                </tr>
              </thead>

              <tbody>
                {sales.map((sale) => {
                  return (
                    <tr key={sale.id}>
                      <td>
                          {sale.sales_person.name}
                      </td>
                      <td>{sale.sales_person.employee_number }</td>
                      <td>{sale.purchaser.name}</td>
                      <td>{sale.vin.vin}</td>
                      <td>${sale.sale_price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/sales/new">
              <button className="btn btn-primary">Create a Sale</button>
            </Link>

            <Link to="/salespersons" >
              <button className="btn btn-primary ml-2">Sales persons</button>
            </Link>
            <Link to="/customers" >
              <button className="btn btn-primary ml-2">Customers</button>
            </Link>
          </div>
    </>
  );
};
export default SalesList;
