import { Route, Routes } from "react-router-dom"

import Detail from './views/detail page/detail.componente';
import Home from './views/home/home.component';
import Form from './views/form page/form.component';
import Landing from './views/landing page/landig.component';
import Nav from "./components/nav/nav.component";

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>


  );
}

export default App;
