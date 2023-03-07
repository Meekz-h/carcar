import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/manufacturers"
              >
                Manufacturers
              </NavLink>
            </li>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers/new">
                    Create Manufacturer
                  </NavLink>
                </li>
              </ul>
            </div>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/automobiles"
              >
                Automobiles
              </NavLink>
            </li>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/new">
                    Create Automobile
                  </NavLink>
                </li>
              </ul>
            </div>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/vehicles"
              >
                Vehicles
              </NavLink>
            </li>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/vehicles/new">
                    Create Vehicle
                  </NavLink>
                </li>
              </ul>
            </div>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/sales"
              >
                Sales
              </NavLink>
            </li>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink to="/sales/new" className="dropdown-item">
                    Create a sale
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
