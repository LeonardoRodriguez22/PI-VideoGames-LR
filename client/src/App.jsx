import { Routes, Route } from "react-router-dom";
import Lpage from "./componets/LandingPage/Landingpage";
import "./App.css";
import Detail from "./componets/Detail/Detail";
import Home from "./componets/Home/Home";
import { useLocation } from "react-router-dom";
import NavBar from "./componets/NavBar/NavBar"

function App() {
  const location = useLocation()
  return (
    <div>
      {location.pathname !== "/" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Lpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;


