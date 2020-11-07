import React from 'react'

// t.string "name"
// t.string "phone_number"
// t.string "guest_address"
// t.string "email"
// t.string "time_line"
// t.string "comment"




const Guests = (props) => {
    return (
        <div> 
        {props.guests && props.guests.map(guest =>
        <li key={guest.id}>{guest.name} - {guest.phone_number} - {guest.phone_address} - {guest.email} - {guest.time_line} - {guest.comment} </li>
            )}
        </div> 
    )

    }
    export default Guests