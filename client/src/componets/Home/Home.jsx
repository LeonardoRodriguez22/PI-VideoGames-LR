import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allCharacters } from "../../redux/actions";
import { setPage } from "../../redux/actions";
import "./Home.css"
import Cards from "../Cards/Cards";

const Home = () => {
  const Character = useSelector((state) => state.allCharacters);
  const currentPage = useSelector((state) => state.currentPage);
  
  const VideoGamePerPage = 15


// console.log(Character);


  // const Character = charactersFound.length !== 0 ? charactersFound : characters 
  const dispatch = useDispatch();

  const CharacterSlicer = ()=>{
    const startIndex = (currentPage -1) * VideoGamePerPage
    const endIndex = startIndex + VideoGamePerPage

    return Character.slice(startIndex, endIndex)
  }


  useEffect(() => {
    dispatch(allCharacters());
  }, []);

  const handleNextPage = () => {
    const totalPage = Math.ceil(Character.length / VideoGamePerPage)
    if(currentPage < totalPage){
      dispatch(setPage(currentPage + 1))
    }
  };

  const handlePrevPage = () => {
    if(currentPage > 1)
    dispatch(setPage(currentPage - 1))
  };

  return (
    <div className="divAllVG">
      <Cards Character={CharacterSlicer()} />
      <div>
        <button disabled= {currentPage === 1} onClick={handlePrevPage}>PREV</button>
        <button disabled = {currentPage ===  Math.ceil(Character.length / VideoGamePerPage)} onClick={handleNextPage}>NEXT
        </button>
      </div>
    </div>
  );
};

export default Home;
