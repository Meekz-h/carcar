import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SalesPersonSales = () => {
  const { employee_number } = useParams();
  const [sales, setSales] = useState([]);
  const fetchData = async () => {
    const url = `http://localhost:8090/api/sales/${employee_number}`;
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      setSales(data.sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Sales</h1>
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
        </div>
      </div>
    </>
  );
};
export default SalesPersonSales;
