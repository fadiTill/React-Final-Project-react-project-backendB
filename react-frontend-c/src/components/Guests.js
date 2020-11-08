import React from 'react'
import {connect} from 'react-redux'
import {deleteGuest} from '../actions/deleteGuest'
// t.string "name"
// t.string "phone_number"
// t.string "guest_address"
// t.string "email"
// t.string "time_line"
// t.string "comment"




const Guests = (props) => {

    // state = {}

    const handleDelete = (guest) => {
        // debugger;
    props.deleteGuest(guest.id, guest.house_id)
}

    return (
        <div> 
        {props.guests && props.guests.map(guest =>
       <li key={guest.id}>{guest.name} - {guest.phone_number} - {guest.phone_address} - {guest.email} - {guest.time_line} - {guest.comment}<button onClick={() => handleDelete(guest)}>Delete</button></li> 
            )}
        </div> 
    )

    }
    export default connect(null, {deleteGuest})(Guests)