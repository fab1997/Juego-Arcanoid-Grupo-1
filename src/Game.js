
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './componente/Home';
import Juego from "./componente/Juego";
import Desarrolladores from './componente/Desarrolladores';

function Game() {
  return (
  
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/juego' element={<Juego/>}/>
        <Route path='/desarrolladores' element={<Desarrolladores/>}/>
      </Routes>
    </Router>
    
  );
}

export default Game;