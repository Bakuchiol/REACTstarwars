import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
import { useLocation } from 'react-router-dom'
import plot from '../../models/plot'


function FilmInfo(props) {

    const [filmInfo, setFilmInfo] = useState(plot[0])
    let location = useLocation()
    


  return (
    <MainLayout>
        <div>
      
        </div>
    </MainLayout>
    
  )
}

export default FilmInfo
