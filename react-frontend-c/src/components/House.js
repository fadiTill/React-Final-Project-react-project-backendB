import React from 'react'

import GuestsContainer from '../containers/GuestsContainer'
// import HouseInput from './HouseInput'

const House = (props) => {

   // let house = props.houses[props.match.params.id - 1]
  //  does not mutate but rather creates a new array, 
   let house = props.houses.filter(house => house.id ==props.match.params.id)[0]
 console.log(house)
    return (
        <div>
          <br></br>
          <br></br>
        <h2> 
         {house ? house.house_address : null} 
          </h2>
           <GuestsContainer house={house}/>
           </div>
             )
   
            }


export default House