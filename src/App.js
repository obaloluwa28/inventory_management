import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addinventory from "./Pages/Addinventory";
import Dashboard from "./Pages/dashboard";
import PofS from "./Pages/PofS";
import Report from "./Pages/Report";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/addproduct" element={<Addinventory />} />
          <Route exact path="/pointofsale" element={<PofS />} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
