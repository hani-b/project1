import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Home';
import Navbar from './navbar/navbar';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Composants pour les différentes pages
//const Home2 = () => <h1>Bienvenue sur la page d'accueil !</h1>;
//const About = () => <h1>À propos</h1>;
//const Account = () => <h1>Mon Compte</h1>;
//const Settings = () => <h1>Paramètres</h1>;


function App() {
  return (
    /*<Router>
      <Navbar />
      <Routes>
        {/* Page d'accueil par défaut *///}
        /*<Route path="/" element={<Home2 />} />
        {/* Autres pages *///}
        /*<Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router> */
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
