export default function houseReducer(state = {house: []}, action) {
    //state point to an object instead of array to avoid issue updating

    return action.payload

}