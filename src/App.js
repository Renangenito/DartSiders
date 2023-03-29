import './App.css';
import BarraPesquisa from './Components/BarraPesquisa';
import SideBar from './Components/SideBar';
import Inicio from './Pages';

function App() {
  return (
    <div className="App">
      <SideBar />
      <BarraPesquisa />
      <Inicio />
    </div>
  );
}

export default App;
