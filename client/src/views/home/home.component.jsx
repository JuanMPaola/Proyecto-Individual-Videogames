import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./home.module.css"

import { getGames, clearState } from "../../redux/actions";
import Cards from "../../components/cards/cards.component";

function Home() {

  let allGames = useSelector((state) => state.allGames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames())
    //Aca va lo que pasa cuando se desmonta
    /* return (()=>clearState()) */
  }, [dispatch])

  return (
    <div className={style.container}>

      <div className={style.filtros}>
        <h1>filtros</h1>

        <h2>asd</h2>

        <label>Generos</label>
        <select></select>

        <label>Orden</label>
        <select>
        <option disabled selected>-</option>
          <option value="Ascendente"></option>
          <option value="Descendente"></option>
        </select>

        <label>Origen</label>
        <select>
          <option value="DB"></option>
          <option value="API"></option>
        </select>


      </div>

      <div className={style.cards}>
        <Cards allGames={allGames} />
      </div>

    </div>
  );
}
export default Home;