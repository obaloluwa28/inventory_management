import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addinventory from "./Pages/Addinventory";
import Dashboard from "./Pages/dashboard";
import PofS from "./Pages/PofS";
import Report from "./Pages/Report";
import Logout from "./Pages/logout";
import Categories from "./Pages/Categories";
import Orders from "./Pages/Orders";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Logout />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/addproduct" element={<Addinventory />} />
          <Route exact path="/pointofsale" element={<PofS />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
