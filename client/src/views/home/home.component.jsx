import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./home.module.css"

import { orderUpDown, getGames, filterGenres, filterByOrigin} from "../../redux/actions";
import Cards from "../../components/cards/cards.component";


function Home({ allGenres }) {

  const [filters, setFilters] = useState({});                 //ESTADO DE GENEROS
  const [aux, setAux] = useState(false);                      // AUXILIAR
  const dispatch = useDispatch();                             
  let allGames = useSelector((state) => state.allGames);     
  const [selectedRating, setSelectedRating] = useState("-");  //ESTADOS PARA REINICIAR LOS
  const [selectedNombre, setSelectedNombre] = useState("-");  //SELECT DE NOMBRE Y RATING

  useEffect(() => {
    dispatch(getGames()); // Llama a la acción para cargar los juegos
  }, []);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked
    });
    dispatch(filterGenres(filters))
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

  const handleOrigin = (event) =>{
    dispatch(filterByOrigin(event.target.value))
  }

  console.log(allGames)
  return (
    <div className={style.container}>

      <div className={style.filtros}>
        <h1>filtros</h1>

        <h3>Nombre</h3>
        <select name="Nombre" onChange={handleAscDsc} value={selectedNombre}>
          <option value="-" disabled>-</option>
          <option value="A Nombre">Ascendente</option>
          <option value="D Nombre">Descendente</option>
        </select>

        <h3>Rating</h3>
        <select name="Rating" onChange={handleAscDsc} value={selectedRating}>
          <option value="-" disabled>-</option>
          <option value="A Rating" >Ascendente</option>
          <option value="D Rating">Descendente</option>
        </select>

        <h3>Origen</h3>
        <select name="Origen" onChange={handleOrigin}>
          <option value="All" >All</option>
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