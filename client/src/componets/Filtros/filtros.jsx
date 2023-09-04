import { useSelector } from "react-redux";
import { useState } from "react";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
import { all } from "axios";
import { allCharacters } from "../../redux/actions";

function Filtered() {
  // const [filtro, setFiltro] = useState("");
  const allVideogames = useSelector((state) => state.allCharacters);
  

  // const handleChangeFilterd = (event) => {
  //   setFiltro({ ...filtro, [event.target.name]: event.target.value });
  // };

let orden = allVideogames

  // function alphabeticalOrder(allVideogames, ascendente) {
  //   orden =  allVideogames.sort((a, b) => {
  //       const nameA = a.name.toLowerCase();
  //       const nameB = b.name.toLowerCase();
  //     if(ascendente){
  //       if (nameA < nameB) return -1;
  //       if (nameA > nameB) return 1;
  //       return 0;
  //     }else{
  //       if (nameA > nameB) return -1;
  //       if (nameA < nameB) return 1;
  //       return 0;
  //     }
  //     })
  //     return orden
  //   }
    
    function alphabeticalOrder(allVideogames, ascendente) {
      orden =  allVideogames.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
        if(ascendente){
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        }else{
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        }
        })
        return orden
      }
      
    
//  console.log(allVideogames);


  // function ordenarDesendenteAlfa(allVideogames) {
  //   orden = allVideogames.sort((a, b) => {
  //       const nameA = a.name.toLowerCase();
  //       const nameB = b.name.toLowerCase();

  //       if (nameA > nameB) return -1;
  //       if (nameA < nameB) return 1;
  //       return 0;
  //     })
  //   return orden
  // }
  
  function numberOrder(allVideogames, ascendente) {
    orden = allVideogames.sort((a, b) => {
      const valueA = a.id;
      const valueB = b.id;
      if (ascendente) {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    })
    return orden
  }


  return (
    <div>
      "Filtros alfabeticos ascendentes y descendentes"
        <select name="Filtros alfabeticos" id="">
          <option 
          onChange={alphabeticalOrder} 
          name="a-z"
          value="a-z">
            abc-xyz
          </option>
          <option 
          // onClick={alphabeticalOrder(allVideogames, false)} 
          name="z-a"
          value="z-a">
            zyx-cba
          </option>
        </select>
        <div>
          "Filtros alfabeticos ascendentes y descendentes"
          <select name="Filtros numericos" id="">
            <option 
            // onClick={numberOrder(allVideogames, true) }
             name="1-9" value="1-9">
              123-789
            </option>
            <option 
            // onClick={numberOrder(allVideogames,  false) }
             name="9-1" value="9-1">
              987-321
            </option>
          </select>
      <div>
      <Link to="/home">
        <button >home</button>
      </Link>
      </div>
      
      <div>
        Hellowww
        <Cards Character={orden} />
      </div>
    </div>
    </div>
  );
}

export default Filtered;











