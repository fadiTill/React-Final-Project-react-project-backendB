
export function fetchHouses() {
    return(dispatch) => {
 fetch('http://localhost:3000/api/v1/houses')
//   method: 'GET'
// })
.then(response => response.json())
// .then(data => console.log(data))
.then(houses => dispatch({
type:'FETCH_HOUSES',
payload: houses
}))
    }
}
// dispatch(actionObject)