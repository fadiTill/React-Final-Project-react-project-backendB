import React from 'react'
import {Route, Link} from 'react-router-dom'
import House from './House'

const Houses = (props) => {

    return (
      <div class="vertical-menu">
        {props.houses.map(house => 
        <p key={house.id}>
        <Link to={`/houses/${house.id}`}>{house.house_address}</Link>
        </p>)} 
           </div>
             )
   
            }
            
    
           
       export default Houses
