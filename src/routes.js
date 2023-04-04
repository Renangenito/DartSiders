import { useState } from 'react';
import './routes.css';
import BarraPesquisa from './Components/BarraPesquisa';
import SideBar from './Components/SideBar';
import Inicio from './Pages/Inicio/index';
import ScrollToTop from './Components/ScrollToTop/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Estudantes from './Pages/Estudantes';

function AppRoutes() {

  const [show, setShow] = useState(true);
  const [destacado, setDestacado] = useState(true);

  const showMenuHumburgher = (e) => {
    setShow(!show);
    setDestacado(!destacado);
  }


  return (
    <BrowserRouter>
      <ScrollToTop />
      <SideBar destacado={destacado} />
      <BarraPesquisa handleClickHumburgher={showMenuHumburgher} show={show} />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/estudantes' element={<Estudantes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
