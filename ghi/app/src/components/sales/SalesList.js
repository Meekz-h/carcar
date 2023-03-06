import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const SalesList = () => {
    const [sales, setSales] = useState([]);
    // const fetchData = async () => {
    //     const url = "http://localhost:8090/api/sales/"
    //     const resp = await fetch(url);
    //     if (resp.ok) {
    //         const data = await resp.json();
    //         console.log(data)
    //     }
    // }
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (<>
        <div className="row">
    <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Sales</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Model</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
            <Link to="/automobiles/new"><button className='btn btn-primary'>Create a Automobile</button></Link>
        </div>
    </div>
</div>
    </>);
}
export default SalesList;
