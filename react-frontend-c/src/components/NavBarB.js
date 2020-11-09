import React from 'react'
import {Link} from 'react-router-dom'

const NavBarB = (props) => {

  return (
    
        
        <div class="scrollmenu">
       <Link to='/houses/new'> New House</Link>
       <Link to='/houses'> House index</Link>
    </div>

  )
}

export default NavBarB
