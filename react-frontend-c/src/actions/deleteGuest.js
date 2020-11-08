
export const deleteGuest = (guest, house_id) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/houses/${house_id}/guests/${guest}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(house => dispatch({type: 'DELETE_GUEST', payload: house}))
    }
  }