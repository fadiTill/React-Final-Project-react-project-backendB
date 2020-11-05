import React from 'react'


const House = (props) => {

let house = props.houses[props.match.params.id - 1]

    return (
        <li> 
        {house ? house.house_address :null}
           </li>
             )
   
            }


export default House