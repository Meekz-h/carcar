import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const AutomobileList = () => {
    const [automobiles, setAutomobiles] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const resp = await fetch(url);
        if (resp.ok) {
            const data = await resp.json();
            console.log(data)
            setAutomobiles(data.autos)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (<><div className="row">
    <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Automobiles</h1>
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
                    {
                        automobiles.map(auto => {
                            return (
                                <tr key={auto.href}>
                                    <td>{auto.vin}</td>
                                    <td>{auto.year}</td>
                                    <td>{auto.color}</td>
                                    <td>{auto.model.name}</td>
                                </tr>
                            )
                        })
                }
                </tbody>
            </table>
            <Link to="/automobiles/new"><button className='btn btn-primary'>Create a Automobile</button></Link>
        </div>
    </div>
</div></>);
}
export default AutomobileList;
