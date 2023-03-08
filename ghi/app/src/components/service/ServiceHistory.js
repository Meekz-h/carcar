import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

const ServiceHistory = () => {
    const [appointments, setAppointments] = useState([]);
    const [query, setQuery] = useState("");

    const search = (data) => {
      return data.filter((item) => item.input_vin.toUpperCase().includes(query.toUpperCase()))
    };

    const onSearch = (e) => {
      e.preventDefault();
      setQuery(e.target.value)
    };

    const getData = async () => {
        const resp = await fetch("http://localhost:8080/api/service/")
        if (resp.ok) {
            const data = await resp.json()
            setAppointments(data.service)

        }
    };

    useEffect(()=> {
        getData()
    }, []);

    return <>
        <div className="input-group mb-3">
          <input onChange={onSearch} type="text" className="form-control" placeholder="Search VIN Number..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>
        <h1>Service Appointments</h1>
        <table className="table table-striped">
            <thead>
              <tr>
                <th>VIN</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {search(appointments).map(appointment => {
                  const isComplete = appointment.service_complete
                  if (isComplete){
                    return(
                        <tr key={appointment.id}>
                            <td>{appointment.input_vin}</td>
                            <td>{appointment.customer_name}</td>
                            <td>{new Date(appointment.appt_datetime).toLocaleDateString()}</td>
                            <td>{new Date(appointment.appt_datetime).toLocaleTimeString()}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                        </tr>
                    );
                  }
                })}
            </tbody>
        </table>
    </>
}

export default ServiceHistory;
