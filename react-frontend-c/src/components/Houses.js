import React from 'react'


const Houses = (props) => {

    return (
        <div> 
        {props.houses.map(house => <li key={house.id}>{house.house_address}</li>)}
           </div>
             )
   
            }
            
    
           
       export default Houses
