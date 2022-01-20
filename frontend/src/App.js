import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Axios from "axios";
import { spacing } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Login</Link> <spacing></spacing>
          <Link to="/Home">Home</Link> <spacing></spacing>
          <Link to="/Profile">Profile</Link>
          <p></p>
        </nav>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
