import React from 'react'

function StarSearch(props) {
  return (
    <div id='searchBox'>
      <input
      className='inputArea'
      type="text"
      value={props.value}
      onChange={(e) => props.setSearches(e.target.value)}
      placeholder='Search for a Movie'></input>
    </div>
  )
}

export default StarSearch