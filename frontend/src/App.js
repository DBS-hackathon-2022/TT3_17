import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/Home">Home</Link>
          <Link to="/Profile">Profile</Link>
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
