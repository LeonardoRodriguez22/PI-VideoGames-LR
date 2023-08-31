// import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Lpage from "./componets/LandingPage/Landingpage"
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import NavBar from "./componets/NavBar/NavBar";
import Detail from "./componets/Detail/Detail";
import Cards from "./componets/Cards/Cards";
// import Registro from "./componets/Registro/registro"
// import Forms from "./componets/Forms/Forms";



function App() {
  const { pathname } = useLocation();

  const [characters, setCharacters] = useState([])
  
  async function onSearch(name) {
    try {
      const { data } = await axios(
        `http://localhost:3000/?name=${name}`
      );
     
      if (data.name) {
        const char = data.map(n => n.name === name)
        setCharacters((oldChars) => [...oldChars, char]);
      }
      
    } catch (error) {
      window.alert("🔥🔥The character with this ID does not exist!!!🔥🔥");
    }
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== id;
      })
    );
  };
  useEffect(() => {
   
  }, [characters]);
  
  return (
    <div>
      {pathname !== "/" &&(
        <NavBar onSearch={onSearch}/>
        )}
      <Routes>
        <Route path="/" element={<Lpage />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
       
        {/* <Route path="/registro" element={<Registro />} /> */}
        {/* <Route path="/login" element= {<Forms login={login} />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
