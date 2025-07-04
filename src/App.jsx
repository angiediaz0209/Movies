import './css/App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Favorites from './pages/Favorites';
import NavBar from './components/Navbar';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/Movies" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}


export default App;
