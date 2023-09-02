import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/searchBar";


const NavBar = () => {
  const filtro = (event) => {};
  const filtro1 = (event) => {};
 
  
  
    // async function onSearch(name) {
    //   try {
    //     const { data } = await axios(`http://localhost:3000/?name=${name}`);
    //       data.forEach(element => {
    //         setCharacters((oldChars) => [...oldChars, element]);
    //       });
    //   } catch (error) {
    //     window.alert("🔥🔥The character with this ID does not exist!!!🔥🔥");
    //   }
    // }
   




  return (
    <div className={style.nav}>
      <select onChange={filtro}>
        <option value="a-z">asendente...abcde</option>
        <option value="z-a">desendente...edcba</option>
        <option value="0-10">asendente...01234</option>
        <option value="10-1">desendente...43210</option>
      </select>
      <select onChange={filtro1}>
        <option>filtrar por género</option>
        <option value="a-z">desde api</option>
        <option value="z-a">desde base de datos</option>
      </select>

      <SearchBar  />
    </div>
  );
};

export default NavBar;
