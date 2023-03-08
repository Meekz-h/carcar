import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([])

    const getData = async () => {
        const resp = await fetch("http://localhost:8100/api/models/")
        if (resp.ok) {
            const data = await resp.json()
            setVehicles(data.models)

        }
    }

    useEffect(()=> {
        getData()
    }, [])


    return <>
      <h1>Vehicle Models</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map(vehicle => {
                    return(
                        <tr key={vehicle.href}>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.manufacturer.name}</td>
                            <td><img src={vehicle.picture_url}/></td>
                        </tr>
                    );
                })}

            </tbody>
        </table>
        <Link to='/vehicles/new' className="btn btn-primary">Create Vehicle</Link>
    </>
}

export default VehiclesList;
