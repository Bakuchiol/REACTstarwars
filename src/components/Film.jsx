import React from 'react'
// attempt useContext
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { Link } from 'react-router-dom'


function Film(props) {
  // context
  let {movie} = useContext(AppContext)
  let {all} = useContext(AppContext)
  
  console.log('at film::', all)


  return (
    

      <div id='movieWrapper'>

        {/* LINK ATTEMPT */}
      <Link to='/film-info'>

        {/* individual film poster */}
      {props.films.map((film, i) => (
        <div className='individualFilm'>

          {/* appContext Attempt */}
          <div id='contextAttempt'>
              {/* use index */}
              <img src={film.Poster} alt="poster" /> {/* from API */}
              <p>{film.Title}</p> {/* from API */}
          </div> {/* app context /div */}

        </div>
      )
      )}

      </Link>
      
    </div>



  )
}

export default Film
