import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGames } from "../../redux/actions";
import Cards from "../../components/cards/cards.component";

function Home() {

  let allGames = useSelector((state) => state.allGames);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames())

    //Aca va lo que pasa cuando se desmonta
    //return (()=>{  })
  }, [dispatch])

  return (
    <div >
      <h1>Home</h1>

      <Cards allGames = {allGames}/>

    </div>
  );
}

export default Home;