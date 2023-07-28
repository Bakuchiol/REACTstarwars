// states
import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
import Film from '../../components/Film'
// api
import axios from 'axios'
// images
import posters from '../../models/posters'
// style
import './filmStyle.css';

function FilmList() {
  // films
  const [films, setFilms] = useState([])
  // const posters
  const [images, setImages] = useState(posters)


  // api axios
  const fetchFilms = async() => {
    // let movie =[]
    let data;
    data = await axios.get(`https://swapi.dev/api/films`);
    // let info = await responseFilms.data
    console.log(data.data)
    setFilms(data.data.results)
  }
  // useEffect
  useEffect(() => {
    fetchFilms()
  }, [])

  const loaded = () => {
    return (
      <MainLayout>
        <hr />
        <h1>FILMS HERE</h1>
        <div id='filmWrapper'>
          {
            films.map((film, i)=>{
              return <Film key={i}
              film={film.title}
              date={film.release_date}/>
              // <h1 key={i}>{film.title}</h1>
            })
          }
        </div>
      </MainLayout>
    )
  }

  // loading screen
  const loading = () => {
    <h1> LOADING ...</h1>
  }
  return films ? loaded() : loading()
}

export default FilmList