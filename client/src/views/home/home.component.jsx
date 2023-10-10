import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./home.module.css"

import { orderUpDown, getGames, filterGenres, filterByOrigin } from "../../redux/actions";
import Cards from "../../components/cards/cards.component";
import Paginado from "../../components/paginado/paginado.component";

function Home({ allGenres }) {

  const [aux, setAux] = useState(false);                      // AUXILIAR
  const dispatch = useDispatch();
  let allGames = useSelector((state) => state.allGames);
  const [selectedRating, setSelectedRating] = useState("-");  //ESTADOS PARA REINICIAR LOS
  const [selectedNombre, setSelectedNombre] = useState("-");  //SELECT DE NOMBRE Y RATING

  //------------------------PAGINADO------------------------//

  const [currentPage, setCurrentPage] = useState(1)
  const [charactersPerPage, setCharactersPerPage] = useState(15)
  const indexOfLastCharacter = currentPage + charactersPerPage
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage

  const currentCharacters = allGames.slice(indexOfFirstCharacter, indexOfLastCharacter)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    dispatch(getGames()); // Llama a la acción para cargar los juegos
  }, []);

  const handleChange = (event) => {
    dispatch(filterGenres(event.target.name))
    setAux(true)
  };

  const handleAscDsc = (event) => {
    const selectedValue = event.target.value;
    if (event.target.name === "Nombre") {          //REINICIA EL ESTADO DEL SELECT
      setSelectedNombre(selectedValue);
      setSelectedRating("-");
    } else if (event.target.name === "Rating") {
      setSelectedRating(selectedValue);
      setSelectedNombre("-");
    }
    dispatch(orderUpDown(selectedValue))           //DESPACHA LA ACCION QUE ORDENA EL ARRAY
    setAux(true)
  }

  const handleOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value))
  }

  console.log(allGames)
  return (
    <div className={style.container}>

      <div className={style.filtros}>
        <h2>Filters</h2>

        <h3>Name</h3>
        <select name="Nombre" onChange={handleAscDsc} value={selectedNombre}>
          <option value="-" disabled>-</option>
          <option value="A Nombre">A - Z</option>
          <option value="D Nombre">Z - A</option>
        </select>

        <h3>Rating</h3>
        <select name="Rating" onChange={handleAscDsc} value={selectedRating}>
          <option value="-" disabled>-</option>
          <option value="A Rating" >Ascendent</option>
          <option value="D Rating">Descendent</option>
        </select>

        <h3>Origin</h3>
        <select name="Origen" onChange={handleOrigin}>
          <option value="All" >All</option>
          <option value="DB">DB Games</option>
          <option value="API">API Games</option>
        </select>

        <h3>Generos</h3>
        <div className={style.checkboxs}>
          {allGenres && allGenres.map((genero) => (
            <label key={genero.id}>
              {genero.name}
              <input
                type="checkbox"

                name={genero.name}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
      </div>

      <Paginado
        charactersPerPage={charactersPerPage}
        allGames={allGames.length}
        paginado={paginado}
      />

      <div className={style.cards}>
        <Cards allGames={allGames} />
      </div>

    </div>
  );
}
export default Home;