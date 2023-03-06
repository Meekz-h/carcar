import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerForm  from "./components/manufacturers/ManufacturerForm";
import AutomobileForm from "./components/automobiles/AutomobileForm";
import AutomobileList from "./components/automobiles/AutomobileList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            {/* <Route index element={}/> */}
            <Route path="new" element={<ManufacturerForm/>} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList/>}/>
            <Route path="new" element={<AutomobileForm/>} />
          </Route>
          {/* <Route path="vehicles">
            <Route index element={}/>
            <Route path="new" element={} />
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
