import './App.css';

import Home from './pages/Home';
import Navigation from './components/navbar/Navbar';
import SoloMovie from './pages/SoloMovie';
import Pagetemplate from './pages/PageTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/movies/:id' element={<SoloMovie url="/movie" />} />
          <Route exact path='/tv/:id' element={<SoloMovie url="/tv" type="tv" />} />
          <Route exact path='/tvShow' element={<> <Navigation /> <Pagetemplate url="discover/tv" type="tv" /> </>} />
          <Route exact path='/movies' element={<>  <Navigation /> <Pagetemplate url="discover/movie" /> </>} />
          <Route exact path='/plays' element={<>  <Navigation /> <Pagetemplate url="movie/now_playing" /> </>} />
          
        </Routes>
       
      </Router>

    </>
  );
}

export default App;
