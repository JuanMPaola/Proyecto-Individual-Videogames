import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import Detail from './views/detail page/detail.componente';
import Home from './views/home/home.component';
import Form from './views/form page/form.component';
import Landing from './views/landing page/landig.component';
import Nav from "./components/nav/nav.component";

function App() {

  let allGames = useSelector((state) => state.allGames);

  const onSearch = async (name) => {
    allGames = allGames.filter((juego) => {
      return juego.name.toLowerCase().includes(name.toLowerCase());
    })
  }

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>


  );
}

export default App;
