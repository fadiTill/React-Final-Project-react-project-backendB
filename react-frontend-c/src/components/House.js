import React from 'react'
// import {Redirect} from 'react'
import GuestsContainer from '../containers/GuestsContainer'
import HouseInput from './HouseInput'

const House = (props) => {

let house = props.houses[props.match.params.id - 1]
 console.log(house)
    return (
        <div>
        <h2> 
         {house ? house.house_address : null} 
           </h2>
           <GuestsContainer house={house}/>
           </div>
             )
   
            }


export default House