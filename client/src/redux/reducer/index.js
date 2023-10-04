import { CLEAR_STATE, GET_BY_ID, GET_BY_NAME, GET_GAMES, SUMBIT_GAME, GET_GENRES, GET_PLATFORMS, FILTER_GAMES } from "../actions";

let initialState = { allGames: [], allGenres: [], platflorms: [] }

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
                allGames: [...state.allGames, ...action.payload]
            }
        case GET_GENRES:
            return {
                ...state,
                allGenres: action.payload
            }
        case FILTER_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platflorms: action.payload
            }
        case CLEAR_STATE:
            return {
                allGames: []
            }
        default:
            return state

    }

}

export default rootReducer;