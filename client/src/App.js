import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGenres } from "./redux/actions";

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

  return (
    <div>
    
      <Nav/>
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/form" element={<Form allGenres={allGenres} />} />
      </Routes>
    </div>


  );
}

export default App;
