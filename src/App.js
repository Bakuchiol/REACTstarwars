import './App.css';
// routes
import { Routes, Route } from 'react-router-dom'
// links to pages
import FilmList from './pages/film/FilmList'
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import FilmInfo from './pages/film/FilmInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/films' element={<FilmList />}/>
        <Route path='/film-info' element={<FilmInfo/>}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
