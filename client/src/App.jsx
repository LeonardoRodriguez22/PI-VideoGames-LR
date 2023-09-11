import { Routes, Route } from "react-router-dom";
import Lpage from "./componets/LandingPage/LandingPage";
import Detail from "./componets/Detail/Detail";
import Home from "./componets/Home/Home";
import { useLocation } from "react-router-dom";
import NavBar from "./componets/NavBar/NavBar";
import Form from "./componets/Forms/Forms";
import FeddBack from "./componets/feddBack/feddBack";
import "./App.css"


function App() {
  const location = useLocation();
  return (
    <div className="divGeneral">
      {location.pathname === "/home" ? (
        <NavBar />
      ) : null}
      <Routes>
        <Route path="/" element={<Lpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail id:id/>} />
        <Route path="/create" element={<Form />} />
        <Route path="/feddback" element={<FeddBack />} />
      </Routes>
    </div>
  );
}
export default App;
