import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Players from './pages/Players';
import Games from './pages/Games';
import Footer from './components/Footer';

//TODO: mostrar la info del ultimo partido
// ? Dividir si son Equipo 1 o Equipo 2

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/partidos'
          element={<Games />}
        />
        <Route
          path='/jugadores'
          element={<Players />}
        />
        <Route
          path='/*'
          element={<Navigate to='/' />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
