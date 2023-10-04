import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./home.module.css"

import { filterGames, getGames } from "../../redux/actions";
import Cards from "../../components/cards/cards.component";


function Home({ allGenres }) {

  const [filters, setFilters] = useState({});


  let allGames = useSelector((state) => state.allGames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames(),filterGames())
    //Aca va lo que pasa cuando se desmonta
    /* return (()=>clearState()) */
  }, [dispatch])


  
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked
    });
  };


  return (
    <div className={style.container}>

      
      {console.log(filters)}

      <div className={style.filtros}>
        <h1>filtros</h1>

        <h3>Orden</h3>
        <select>
          <option value="-" selected>-</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <h3>Origen</h3>
        <select>
          <option value="-" selected>-</option>
          <option value="DB">DB Games</option>
          <option value="API">API Games</option>
        </select>

        <h3>Generos</h3>

        {allGenres.map((genero) => (
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