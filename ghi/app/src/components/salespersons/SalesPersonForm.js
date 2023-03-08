import React,{useState} from "react";
const SalesPersonForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        employee_number:"",
    })

    const handleFormChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault()
        const url = "http://localhost:8090/api/salespersons/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const resp = await fetch(url, fetchConfig);
        if (resp.ok) {
            const data = await resp.json()
            setFormData({
                name: "",
                employee_number:"",
            });

        }
    }

  return (
    <>
          <div className="shadow p-4 mt-4">
            <h1>Create a new Sales person</h1>
            <form id="create-salesperson-form"  onSubmit={handleSumbit}>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="name"
                  id="name"
                                  type="text"
                                  onChange={handleFormChange}
                                  value={formData.name}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  className="form-control"
                  name="employee_number"
                  id="employee_number"
                                  type="text"
                                  onChange={handleFormChange}
                                  value={formData.employee_number}
                />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
    </>
  );
};
export default SalesPersonForm;
