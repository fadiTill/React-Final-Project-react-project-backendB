import React from 'react'
import {Route, Link} from 'react-router-dom'
import House from './House'

const Houses = (props) => {

    return (
        <div> 
        {props.houses.map(house => 
        <li key={house.id}>
        <Link to={`/houses/${house.id}`}> {house.house_address}</Link>
        </li>)} 
           </div>
             )
   
            }
            
    
           
       export default Houses
