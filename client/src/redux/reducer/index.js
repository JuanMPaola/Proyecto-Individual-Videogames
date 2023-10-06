import { CLEAR_STATE, GET_BY_ID, GET_BY_NAME, GET_GAMES, SUMBIT_GAME, GET_GENRES, GET_PLATFORMS, ORDER_NAMRAT, ORDER_UPDOWN } from "../actions";

let initialState = { allGames: [], allGenres: [], platflorms: [], orden: "", ratName:"" }

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
            if (state.ratName === "name") {
                if (action.payload.Orden === "Ascendente") {
                    ordenados = state.allGames.sort((a, b) => a.name.localeCompare(b.name))
                } else if (action.payload.Orden === "Descendente") {
                    ordenados = state.allGames.sort((a, b) => b.name.localeCompare(a.name))
                } else {
                    ordenados = state.allGames.sort((a, b) => b.name.localeCompare(a.name))
                }
                console.log(ordenados)
                return {
                    ...state,
                    allGames: ordenados,
                    orden: action.payload,
                }
            }
            if (state.ratName === "rating"){
                if (action.payload.Orden === "Ascendente") {
                    ordenados = state.allGames.sort((a, b) => (a.rating > b.rating ? 1 : -1))
                } else if (action.payload.Orden === "Descendente") {
                    ordenados = state.allGames.sort((a, b) => (a.rating < b.rating ? 1 : -1))
                } else{
                    ordenados = state.allGames.sort((a, b) => (a.rating < b.rating ? 1 : -1))
                }
                return {
                    ...state,
                    allGames: ordenados,
                    orden: action.payload,
                }
            }



        case ORDER_NAMRAT:
            if(state.orden === "Ascendente"){
                if (action.payload === "name") {
                    ordenados = state.allGames.sort((a, b) => a.name.localeCompare(b.name))
                } else if (action.payload === "rating") {
                    ordenados = state.allGames.sort((a, b) => (a.rating > b.rating ? 1 : -1))
                } else {
                    ordenados = state.allGames.sort((a, b) => (a.rating > b.rating ? 1 : -1))
                }
                return {
                    ...state,
                    allGames: ordenados,
                    ratName: action.payload
                }
            }
            if(state.orden === "Descendente"){
                if (action.payload === "name") {
                    ordenados = state.allGames.sort((a, b) => b.name.localeCompare(a.name))
                } else if (action.payload === "rating") {
                    ordenados = state.allGames.sort((a, b) => (a.rating < b.rating ? 1 : -1))
                }else {
                    ordenados = state.allGames.sort((a, b) => (a.rating < b.rating ? 1 : -1))
                }
                return {
                    ...state,
                    allGames: ordenados,
                    ratName: action.payload
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