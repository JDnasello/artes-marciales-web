import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import "./App.css";
import NavBar from './components/NavBar.jsx';
import Inicio from './components/Inicio.jsx';
import Explorar from './components/Explorar.jsx';
import ArteMarcialIndividual from "./components/ArteMarcialIndividual.jsx";
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';

function App() {

  const location = useLocation()

  const estaEnLaRutaContacto = location.pathname === '/contacto'
  const estaEnLaRutaInicio = location.pathname === '/'

  return (
    <>
      {!estaEnLaRutaContacto && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/artes/:arteid" element={<ArteMarcialIndividual />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!estaEnLaRutaContacto && !estaEnLaRutaInicio && <Footer />}
    </>
  );
}

export default App;
