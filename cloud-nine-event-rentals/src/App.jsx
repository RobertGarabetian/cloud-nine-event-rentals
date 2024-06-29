import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Packages from "./Packages";
import AboutUs from "./AboutUs";
function App() {
  return (
    <Router>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "packages" element = {<Packages />}/>
          <Route path = "aboutus" element = {<AboutUs />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
