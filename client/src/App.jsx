import { Routes, Route } from "react-router-dom";
import Lpage from "./componets/LandingPage/Landingpage";
import "./App.css";
import Detail from "./componets/Detail/Detail";
import Home from "./componets/Home/Home";
import { useLocation } from "react-router-dom";
import NavBar from "./componets/NavBar/NavBar"
import Create from "./componets/NavBar/NavBar"
import Filtered from "./componets/Filtros/filtros";

function App() {
  const location = useLocation()
  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "filter" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Lpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/filter" element={<Filtered />} />
      </Routes>
    </div>
  );
}
export default App;


