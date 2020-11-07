import React from 'react'
import GuestInput from '../components/GuestInput'
import Guests from '../components/Guests'



class GuestsContainer extends React.Component {



render() {
    console.log('Guests')
    return (
        <div> 
        <GuestInput house={this.props.house}/>
        <Guests guests={this.props.house && this.props.house.guests}/>
        </div>  
    )
    }
}

export default GuestsContainer