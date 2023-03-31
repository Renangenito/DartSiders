import { useState } from 'react';
import './App.css';
import BarraPesquisa from './Components/BarraPesquisa';
import SideBar from './Components/SideBar';
import Inicio from './Pages';

function App() {

  const [show, setShow] = useState(true);
  const [destacado, setDestacado] = useState(true);

    const showMenuHumburgher = (e) =>{ 
        setShow(!show);
        setDestacado(!destacado);
    }


  return (
    <div className="App">
      <SideBar destacado={destacado}/>
      <BarraPesquisa handleClickHumburgher={showMenuHumburgher} show={show}/>
      <Inicio />
    </div>
  );
}

export default App;
