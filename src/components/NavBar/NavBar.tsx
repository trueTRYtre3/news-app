import React from 'react'
import SearchBar from './SearchBar'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav'>
        <h1>News Finder</h1>
        <div id="search">
            <SearchBar />
        </div>
    </div>
  )
}

export default NavBar