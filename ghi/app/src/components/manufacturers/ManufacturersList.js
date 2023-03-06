import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

const ManufacturersList = () => {
    const [manufacturers, setManufacturers] = useState([])

    const getData = async () => {
        const resp = await fetch("http://localhost:8100/api/manufacturers/")
        if (resp.ok) {
            const data = await resp.json()
            console.log(data.manufacturers)
            setManufacturers(data.manufacturers)

        }
    }

    useEffect(()=> {
        getData()
    }, [])


    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return(
                        <tr key={manufacturer.href}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    );
                })}
            </tbody>
            <Link to='/manufacturers/new' className="btn btn-primary">Create Manufacturer</Link>
        </table>
    </>
}

export default ManufacturersList;
