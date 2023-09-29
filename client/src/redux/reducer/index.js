import { GET_GAMES } from "../actions";

let initialState = {allGames:[]}

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        default:
            return state
    }

}

export default rootReducer;