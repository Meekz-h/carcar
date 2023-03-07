import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const SalesPersonList = () => {
  const [salespersons, setSalesPersons] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8090/api/salespersons";
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      setSalesPersons(data.sales_persons);
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
            <h1>Sales Persons</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employee Number</th>
                </tr>
              </thead>

              <tbody>
                {salespersons.map(salesperson=> {
                  return (
                    <tr key={salesperson.id}>
                      <td>
                        <Link to={`/sales/${salesperson.id}`}>
                          {salesperson.name}
                        </Link>
                      </td>
                      <td>{salesperson.employee_number}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/salespersons/new">
              <button className="btn btn-primary">Create a Sales Person</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalesPersonList;
