import { CLEAR_STATE, GET_BY_ID, GET_BY_NAME, GET_GAMES, SUMBIT_GAME, GET_GENRES } from "../actions";

let initialState = { allGames: [], allGenres: [] }

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BY_NAME:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                allGames: action.payload
            }
        case SUMBIT_GAME:
            return {
                ...state,
                allGames: [...state.allGames,...action.payload]
            }
            case GET_GENRES:
                return{
                    ...state,
                    allGenres: action.payload
                }
        case CLEAR_STATE:
            return {
                allGames: action.payload
            }
        default:
            return state

    }

}

export default rootReducer;