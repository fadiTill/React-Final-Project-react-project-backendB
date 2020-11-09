import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
        <button>
      <Link to='/houses/new'> Add House</Link>
      </button>
    </div>

  )
}

export default NavBar
