import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

const ServiceHistory = () => {
    const [appointments, setAppointments] = useState([])
    // const [search, setSearch] = useState({
    //   query: '',
    //   list: []
    // })
    // const handleChange = (e) => {
    //   const results = appointments.filter(appointment => {
    //     if (e.target.value === "") return appointments
    //     return appointments.
    //   })
    //   setQuery(e.target.value)
    // }

    const getData = async () => {
        const resp = await fetch("http://localhost:8080/api/service/")
        if (resp.ok) {
            const data = await resp.json()
            console.log("*************************DATA",data)
            setAppointments(data.service)

        }
    }

    useEffect(()=> {
        getData()
        console.log(appointments)
    }, [])

    // const handleUpdate = async (event) => {
    //   event.preventDefault();
    //   console.log(event.target.value)
    //   console.log(appointments)
    //   const service_id = event.target.value
    //   const locationUrl = `http://localhost:8080/api/service/${service_id}/`;
    //   const setTrue = {"service_complete": true}

    //   const fetchConfig = {
    //     method: "PUT",
    //     body: JSON.stringify(setTrue),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };

    //   const response = await fetch(locationUrl, fetchConfig);
    //   getData()
    // }

    return <>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="VIN Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">Search VIN</span>
          </div>
        </div>
        <h1>Service Appointments</h1>
        <table className="table table-striped">
            <thead>
              <th>VIN</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th></th>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                  const isComplete = appointment.service_complete
                  if (isComplete){
                    return(
                        <tr key={appointment.href}>
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
