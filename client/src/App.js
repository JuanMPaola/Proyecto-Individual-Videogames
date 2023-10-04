import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGenres, getPlatforms } from "./redux/actions";
import { getGames } from "./redux/actions";

import Detail from './views/detail page/detail.componente';
import Home from './views/home/home.component';
import Form from './views/form page/form.component';
import Landing from './views/landing page/landig.component';
import Nav from "./components/nav/nav.component";

function App() {

  let allGenres = useSelector((state) => state.allGenres);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getGenres())
    //Aca va lo que pasa cuando se desmonta
    /* return (()=>clearState()) */
  }, [dispatch])
  
  const allGames = useSelector((state) => state.allGames);
  
  useEffect(() => {
    dispatch(getGames())
    //Aca va lo que pasa cuando se desmonta
    /* return (()=>clearState()) */
  }, [dispatch])
  
  const allPlataforms = ["PC", "xBox", "PS4", "Switch", "PS5"]
/*   const platforms = useSelector((state)=> state.platforms)

  useEffect(() => {
    dispatch(getPlatforms())

  }, [dispatch]) */

  return (
    <div>
      {console.log()}
      <Nav />
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home allGames={allGames} allGenres={allGenres} />} />
        <Route path="/form" element={<Form allGenres={allGenres} allPlataforms={allPlataforms} />} />
      </Routes>
    </div>
  );
}

export default App;
