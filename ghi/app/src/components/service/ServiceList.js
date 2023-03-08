import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

const ServiceList = () => {
    const [appointments, setAppointments] = useState([])
    const [autos, setAutos] = useState([])

    const getData = async () => {
        const resp = await fetch("http://localhost:8080/api/service/")
        if (resp.ok) {
            const data = await resp.json()
            setAppointments(data.service)

        }
    }

    const fetchAutos = async () => {
      const url = 'http://localhost:8100/api/automobiles/';
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setAutos(data.autos);

      }
    }

    let vins = [];
    useEffect(()=> {
        getData();
        fetchAutos();
    }, [])

    const handleUpdate = async (event) => {
      event.preventDefault();
      const service_id = event.target.value
      const locationUrl = `http://localhost:8080/api/service/${service_id}/`;
      const setTrue = {"service_complete": true}

      const fetchConfig = {
        method: "PUT",
        body: JSON.stringify(setTrue),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(locationUrl, fetchConfig);
      getData()
    }

    const handleDelete = async (e) => {
      const url = `http://localhost:8080/api/service/${e.target.value}/`
      const fetchConfigs = {
          method: "Delete",
          headers: {
              "Content-Type": "application/json"
          }
      }

      const resp = await fetch(url, fetchConfigs)
      const data = await resp.json()

      setAppointments(appointments.filter(appointment => String(appointment.id) !== e.target.id))
      getData()
  }

    return <>
        <h1>Service Appointments</h1>
        <table className="table table-striped">
            <thead>
              <tr>
                <th>{/* VIP */}</th>
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
                {appointments.map(appointment => {
                  const isComplete = appointment.service_complete
                  const vins = [];
                  {autos.map(auto => {
                    vins.push(auto.vin)
                  })}
                  let vip = "";
                  if (vins.includes(appointment.input_vin)){
                    vip = "VIP"
                  }
                  if (!(isComplete)){
                    return(
                        <tr key={appointment.href}>
                            <td className="text-danger">{vip}</td>
                            <td>{appointment.input_vin}</td>
                            <td>{appointment.customer_name}</td>
                            <td>{new Date(appointment.appt_datetime).toLocaleDateString()}</td>
                            <td>{new Date(appointment.appt_datetime).toLocaleTimeString()}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                            <button onClick={handleDelete} value={appointment.id} className="btn btn-danger">Cancel</button>
                            <button onClick={handleUpdate} value={appointment.id} className="btn btn-primary">Finished</button>
                            </td>
                        </tr>
                    );
                  }
                })}
            </tbody>
        </table>
    </>
}

export default ServiceList;
