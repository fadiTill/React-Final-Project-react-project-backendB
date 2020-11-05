import React from 'react'
import House from './House'

const Houses = (props) => {

    return (
        <div> 
        {/* {props.houses.map(house => <li key={house.id}>{house.house_address}</li>)} */}
        {props.houses.map(house => 
        <div key={house.id}>< House house={house}/></div>)} 
           </div>
             )
   
            }
            
    
           
       export default Houses
