import { CLEAR_STATE, GET_BY_ID, GET_BY_NAME, GET_GAMES, SUMBIT_GAME, GET_GENRES, GET_PLATFORMS, ORDER_NAMRAT, ORDER_UPDOWN } from "../actions";

let initialState = { allGames: [], allGenres: [], platflorms: []}

function rootReducer(state = initialState, action) {
    let ordenados;
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
        case GET_PLATFORMS:
            return {
                ...state,
                platflorms: action.payload
            }
        case ORDER_UPDOWN:
            if (action.payload.ratingName === "name") {
                if (action.payload.Orden === "Ascendente") {
                    ordenados = state.allGames.sort((a, b) => a.name.localeCompare(b.name))
                } else if (action.payload.Orden === "Descendente") {
                    ordenados = state.allGames.sort((a, b) => b.name.localeCompare(a.name))
                }
                return {
                    ...state,
                    allGames: [...ordenados]
                }

            } else

                if (action.payload.Orden === "Ascendente") {
                    ordenados = state.allGames.sort((a, b) => (a.rating > b.rating ? 1 : -1))
                    console.log(state.ratname)
                } else {
                    ordenados = state.allGames.sort((a, b) => (a.rating < b.rating ? 1 : -1))
                }
            return{
                ...state,
                allGames: [...ordenados]
                
            }
/*             
 */

        case ORDER_NAMRAT:
            if(action.payload = "name"){
                return {
                    ...state,
                    name: true
                    

                }
            } else if (action.payload ="rating"){
                return {
                    ...state,
                    name: false
                }
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