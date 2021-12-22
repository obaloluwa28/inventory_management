import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addinventory from "./Pages/Addinventory";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Addinventory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
