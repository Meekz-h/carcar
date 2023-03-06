import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={}/>
            <Route path="new" element={} />
          </Route>
          <Route path="automobiles">
            <Route index element={}/>
            <Route path="new" element={} />
          </Route>
          <Route path="vehicles">
            <Route index element={}/>
            <Route path="new" element={} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
