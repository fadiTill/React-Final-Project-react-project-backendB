export default function houseReducer(state = {houses: []}, action) {
    //state point to an object instead of array to avoid issue updating

    switch (action.type) {
        case 'FETCH_HOUSES':
        return {houses:action.payload}
 default:
    return state
    }
}