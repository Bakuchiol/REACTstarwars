import React, { useState } from 'react'


function Film(props) {
  return (
    <div id='movieWrapper'>
      <div id='movieBox'>
      <div className='movieTitle'>{props.film}</div>
      <div className=''>{props.date}</div>
      {/* <h1>films</h1> */}
    </div>
    </div>
  )
}

export default Film
