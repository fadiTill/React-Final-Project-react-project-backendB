export const addHouse = (data) => {

return (dispatch) => {
    fetch('http://localhost:3000/api/v1/houses',{
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(houses => dispatch({type: 'ADD_HOUSE', payload: houses}))
}

}