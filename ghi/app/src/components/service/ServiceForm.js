import React, {useState, useEffect} from 'react';

function ServiceForm() {
  const initialState = {
    customer_name: '',
    appt_datetime: '',
    reason: '',
    technician: '',
    input_vin: ''
  }

  const [formData, setFormData] = useState(initialState)
  const [technicians, setTechnicians] = useState([])

  const fetchTechnician = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technician);
    }
  }

  useEffect(() => {
    fetchTechnician();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:8080/api/service/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      setFormData(initialState);
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add An Appointment</h1>
          <form onSubmit={handleSubmit} id="create-service-form">
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.customer_name} placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
              <label htmlFor="customer_name">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.appt_datetime} placeholder="Appt_datetime" required type="datetime-local" name="appt_datetime" id="appt_datetime" className="form-control" />
              <label htmlFor="appt_datetime">Appointment Date and Time</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
              <label htmlFor="reason">Reason</label>
            </div>

            <div className="form-floating mb-3">
              <select onChange={handleChange} value={formData.technician} required name="technician" id="technician" className="form-select">
                <option value="">Choose A Technician</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.employee_number} value={technician.employee_number}>{technician.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={formData.input_vin} placeholder="Vin" required type="text" name="input_vin" id="input_vin" className="form-control" />
              <label htmlFor="input_vin">VIN</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
