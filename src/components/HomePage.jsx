import React from 'react'

function HomePage(props) {
  return (
    <div>
      {/* <h1>THIS IS THE HOME PAGE</h1> */}
      <img src={props.img[props.count]} alt="images" className='imgSize'/>
    </div>
  )
}

export default HomePage
