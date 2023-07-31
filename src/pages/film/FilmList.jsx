// states
import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
import Film from '../../components/Film'
// import StarSearch from '../../components/StarSearch'
// api
import axios from 'axios'

// try useContext
import { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'

function FilmList() {

  let { all } = useContext(AppContext)

  console.log("all the plot",all)

  // films
  const [films, setFilms] = useState([])
  // const star search
  // const [searches, setSearches] = useState('')


  // api axios
  const fetchFilms = async() => {
   
    // old url
    // https://www.omdbapi.com/?s=star%20wars&apikey=6cfb8a83
    // https://www.omdbapi.com/?s=${searches}&apikey=6cfb8a83

    // axios
    const responsePosts = await axios.get(`https://www.omdbapi.com/?s=star%20wars&apikey=6cfb8a83`);
    let info = await responsePosts.data 
    console.log("API call",[info])

    if(info.Search){
      setFilms(info.Search)
    }

    // let data;
    // data = await axios.get(`https://www.omdbapi.com/?s=star%20wars&apikey=6cfb8a83`);
    // console.log(data.data)
    // setFilms(data.data.results)

  }
  // useEffect
  useEffect(() => {
    fetchFilms()
  }, []);

  console.log("films deconstructed::",{films})

  const loaded = () => {
    return (
      <MainLayout>
        <hr />
        <div id='filmWrapper'>
          {/* testing */}
          <div className='filmBox'>
            <Film films={films}/>
          </div>

          {/* appContext Attempt */}
          {/* dont loop */}
          {/* {all.map((one, i)=>{
            console.log("individual films",one)
            return(
              <Film key={i} item={one}/> // *array of films
            )
          })} */}

          
              
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