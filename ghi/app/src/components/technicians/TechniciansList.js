import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

const TechniciansList = () => {
    const [technicians, setTechnicians] = useState([])

    const getData = async () => {
        const resp = await fetch("http://localhost:8080/api/technicians/")
        if (resp.ok) {
            const data = await resp.json()
            setTechnicians(data.technician)

        }
    }

    useEffect(()=> {
        getData()
    }, [])



    return <>
        <h1>Technicians</h1>
        <Link to='/technicians/new/' className="btn btn-primary">Add a Technician</Link>
        <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee Number</th>
              </tr>
            </thead>
            <tbody>
                {technicians.map(technician => {
                    return(
                        <tr key={technician.employee_number}>
                            <td>{technician.name}</td>
                            <td>{technician.employee_number}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
}

export default TechniciansList;
