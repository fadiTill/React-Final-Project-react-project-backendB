import React from 'react'
import Guests from '../components/Guests'
// import Guest from '../components/Guest'
import GuestInput from '../components/GuestInput'
import houseReducer from '../reducers/houseReducer'


class GuestsContainer extends React.Component {



render() {
    return (
        <div> 
        <GuestInput/>
        <Guests guest={this.props.house && this.props.house.guests}/>
        </div>  
    )
    }
}

export default GuestsContainer