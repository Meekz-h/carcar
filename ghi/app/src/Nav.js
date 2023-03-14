import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Manufacturers</button>
              <ul
                className="dropdown-menu"
                // aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers">
                    All Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers/new">
                    Create Manufacturer
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Automobiles</button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/automobiles">
                    All Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/new">
                    Create Automobile
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Vehicles</button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/vehicles">
                    All Vehicles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/vehicles/new">
                    Create Vehicle
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Sales</button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink to="/sales" className="dropdown-item">
                    All Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sales/new" className="dropdown-item" id="create-sale">
                    Create a Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/customers" className="dropdown-item">
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/customers/new" className="dropdown-item">
                    Create Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/salespersons/">
                    Sales Persons
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/salespersons/new" className="dropdown-item">
                    Create Sales Person
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/salespersons/sales" className="dropdown-item">
                    Sales by Sale person
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Sevice</button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/service">
                    All Service Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/service/new">
                    Create Service Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/service/history">
                    Service History
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/technicians">
                    Technicians
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/technicians/new">
                    Add a Technician
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
