export const deleteGuest = (guestId, houseId) => {

    return (dispatch) => {

return fetch(`http:localhost:3000/api/v1/houses/${houseId}/guests/${guestId}`, {
method: 'DELETE'
    })
    .then(response => response.json())
    .then(house => dispatch({type: 'DELETE_GUEST', payload: house}))
}
} 
