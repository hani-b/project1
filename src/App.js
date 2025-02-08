import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import {Routes, Route, NavLink } from 'react-router-dom'
import {Game} from './screens/Game';

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to='/'>Accueil</NavLink><br></br>
          <NavLink to='/ressources'>Ressources</NavLink><br></br>
          <NavLink to='/game'>Game</NavLink><br></br>
        </nav>
      </header>
      <Routes>
        <Route path ='/' element={<Home/> }/>
        <Route path ='/ressources' element={<Ressources/> }/>
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
