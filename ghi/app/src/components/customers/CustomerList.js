import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8090/api/customers"
        const resp = await fetch(url);
        if (resp.ok) {
            const data = await resp.json()
            setCustomers(data.customers)
        }
    }
    useEffect(() => {
        fetchData()
    },[])

    return (    <>
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Customers</h1>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                </thead>

                <tbody>
                {
                                customers.map(customer => {
                                    return (
                                        <tr key={customer.id}>
                                        <td>{customer.name}</td>
                                        <td>{customer.address}</td>
                                    </tr>
                                    );
                    })
                }
                </tbody>
              </table>
              <Link to="/customers/new">
                <button className="btn btn-primary">Create a Potential Customer</button>
              </Link>
            </div>
          </div>
        </div>
      </>);
}
export default CustomerList;
