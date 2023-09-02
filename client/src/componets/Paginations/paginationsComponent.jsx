import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions";
const dispatch = useDispatch();

const PaginationComponent = () => {
  const currentPage = useSelector((estado) => estado.currentPage);
  
  const itemsPerPage = 10; // Número de elementos por página
  const totalItems = 120; // Número total de elementos en tu lista

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <div className={styles.divAllVG} key={currentPage.id}>
        {characters.map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
              genres={char.genres}
              description={char.description}
              releaseDate={char.releaseDate}
              rating={char.rating}
              platforms={char.platforms}
            />
          );
        })}
      </div>
      <div>{renderPaginationButtons()}</div>
    </div>
  );
};

export default PaginationComponent;
