import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./home.module.css"

import { orderUpDown, getGames, orderNamRat } from "../../redux/actions";
import Cards from "../../components/cards/cards.component";


function Home({ allGenres }) {

  const [filters, setFilters] = useState({});

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  let allGames = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(getGames()); // Llama a la acción para cargar los juegos
  }, []);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked
    });
  };
  const handleOrden = (event) => {
    dispatch(orderUpDown(event.target.value))
    setAux(true)
  }
  const handleName = (event) => {
    dispatch(orderNamRat(event.target.value))
    setAux(true)
  }

  console.log(allGames)
  return (
    <div className={style.container}>

      <div className={style.filtros}>
        <h1>filtros</h1>

        <h3>Orden</h3>
        <select name="Orden" onChange={handleOrden}>
          <option value="-" selected >-</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <h3>Rating</h3>
        <select name="ratingName" onChange={handleName}>
          <option value="-" selected >-</option>
          <option value="name" >Nombre </option>
          <option value="rating">Rating </option>
        </select>

        <h3>Origen</h3>
        <select name="Origen" onChange={handleOrden}>
          <option value="-" selected>-</option>
          <option value="DB">DB Games</option>
          <option value="API">API Games</option>
        </select>

        <h3>Generos</h3>

        {allGenres && allGenres.map((genero) => (
          <label key={genero.id}>
            {genero.name}
            <input
              type="checkbox"
              name={genero.name}
              checked={filters[genero.name] || false}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>

      <div className={style.cards}>
        <Cards allGames={allGames} />
      </div>

    </div>
  );
}
export default Home;