export const addGuest = (guest, house_id) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/houses/${house_id}/guests`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(guest)
    })
    .then(response => response.json())
    // .then(guests => dispatch({type: 'ADD_GUEST', payload: guests}))
    //  because nested can use house reducer
    .then(houses => 
        dispatch({type: 'ADD_GUEST', payload: houses})
        )
}

}