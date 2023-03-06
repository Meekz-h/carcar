import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturersList from './components/manufacturers/ManufacturersList'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturersList />}/>
            {/* <Route path="new" element={} /> */}
          </Route>
          {/* <Route path="automobiles">
            <Route index element={}/>
            <Route path="new" element={} />
          </Route>
          <Route path="vehicles">
            <Route index element={}/>
            <Route path="new" element={} />
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
