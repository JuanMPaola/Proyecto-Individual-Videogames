import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/actions";
import { useParams } from "react-router-dom";

function Detail() {

  const {id} = useParams()

  let game = useSelector((state) => state.allGames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id))

    //Aca va lo que pasa cuando se desmonta
    /* return (()=>clearState()) */
  }, [dispatch])

 // console.log(game)

  return (
    <div >
      <h1>Pagina de detalles</h1>
      <h3>{game.name}</h3>
      <p>{game.description}</p>
      <img src={game.background_image} alt="" />

    </div>
  );
}

export default Detail;