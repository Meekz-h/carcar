import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturersList from "./components/manufacturers/ManufacturersList";
import ManufacturerForm from "./components/manufacturers/ManufacturerForm";
import AutomobileForm from "./components/automobiles/AutomobileForm";
import AutomobileList from "./components/automobiles/AutomobileList";
import SalesList from "./components/sales/SalesList";
import VehiclesList from "./components/vehicles/VehiclesList";
import VehiclesForm from "./components/vehicles/VehiclesForm";
import SalesForm from "./components/sales/SalesForm";
import SalesPersonSales from "./components/sales/SalesPersonSales";
import SalesPersonList from "./components/salespersons/SalesPersonsList";
import SalesPersonForm from "./components/salespersons/SalesPersonForm";
import CustomerList from "./components/customers/CustomerList";
import CustomerForm from "./components/customers/CustomerForm";
import ServiceList from "./components/service/ServiceList"
import ServiceForm from "./components/service/ServiceForm"
import ServiceHistory from "./components/service/ServiceHistory"
import TechniciansForm from "./components/technicians/TechniciansForm"
import TechniciansList from "./components/technicians/TechniciansList"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturersList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="vehicles">
            <Route index element={<VehiclesList />} />
            <Route path="new" element={<VehiclesForm />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList />} />
            <Route path="new" element={<SalesForm />} />
          </Route>
          <Route path="salespersons">
            <Route index element={<SalesPersonList />} />
            <Route path="new" element={<SalesPersonForm />} />
            <Route path="sales" element={<SalesPersonSales />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="service">
            <Route index element={<ServiceList />} />
            <Route path="new" element={<ServiceForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechniciansList />} />
            <Route path="new" element={<TechniciansForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
