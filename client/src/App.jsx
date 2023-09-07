import { Routes, Route } from "react-router-dom";
import Lpage from "./componets/LandingPage/Landingpage";
import Detail from "./componets/Detail/Detail";
import Home from "./componets/Home/Home";
import { useLocation } from "react-router-dom";
import NavBar from "./componets/NavBar/NavBar";
import Form from "./componets/Forms/Forms";
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
      </Routes>
    </div>
  );
}
export default App;
