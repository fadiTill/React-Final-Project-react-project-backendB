export default function houseReducer(state = {houses: []}, action) {
    //state point to an object instead of array to avoid issue updating

    switch (action.type) {
        case 'FETCH_HOUSES':
        return {houses:action.payload}
        case 'ADD_HOUSE':
        return {...state, houses: [...state.houses, action.payload]}
    case 'ADD_GUEST':
        let houses = state.houses.map(house =>{
            if (house.id === action.payload.id) {
                return action.payload
            } else {
                return house
            }
        })
        return {...state, houses: houses}
        case 'DELETE_GUEST':
            let housesBis = state.houses.map(house => {
                if (house.id === action.payload.id) {
                    return action.payload
                } else {
                    return house
                }
            })
            return {...state, houses: housesBis}
        default:
            return state
    }


}