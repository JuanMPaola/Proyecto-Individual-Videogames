import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./detail.module.css"

function Detail() {

  const { id } = useParams()

  let game = useSelector((state) => state.allGames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id))

    //Aca va lo que pasa cuando se desmonta
    /* return (()=>clearState()) */
  }, [dispatch])

  const description = game.description?.replace(/<[^>]*>/g, '');
  return (
    <div className={style.container} >
      {console.log(game.genres)}
      <h1>Pagina de detalles</h1>
      <h3>{game.name}</h3>
      <p>{description}</p>
      <img src={game.background_image} alt="" />
      <h4>Realesed: {game.released}</h4>
      <h4>Rating: {game.rating}</h4>
      <h4>Genres:</h4>
      <ul>
        {game.genres?.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
      <h4>Avible on:</h4>
      {/* <ul>
        {game.platforms?.map((plat) => (
          <li>{plat.name}</li>
        ))}
      </ul> */}

    </div>
  );
}

export default Detail;