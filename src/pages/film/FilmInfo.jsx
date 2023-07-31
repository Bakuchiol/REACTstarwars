import MainLayout from '../../layout/MainLayout'
// useContext Attempt
import { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'


function FilmInfo() {
  // attempt useContext
  let {movie} = useContext(AppContext)

  console.log(movie.Title)

  return (
    <MainLayout>
        <div className='oneMovieCard'>
          <p>{movie.Title}</p>
      
        </div>
    </MainLayout>
    
  )
}

export default FilmInfo
