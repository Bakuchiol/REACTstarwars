import './App.css';
// routes
import { Routes, Route } from 'react-router-dom'
// links to pages
import FilmList from './pages/film/FilmList'
import NoPage from './pages/NoPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/films' element={<FilmList />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
