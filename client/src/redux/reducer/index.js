import { CLEAR_STATE, GET_BY_ID, GET_BY_NAME, GET_GAMES, SUMBIT_GAME, GET_GENRES, GET_PLATFORMS, ORDER_NAMRAT, ORDER_UPDOWN, filterGenres, FILTER_GENRES } from "../actions";

let initialState = { allGames: [], allGenres: [], platflorms: [] }

function rootReducer(state = initialState, action) {
    let ordenados;
    let filtrados;

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
            if (action.payload === "A Nombre") {
                ordenados = state.allGames.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === "D Nombre") {
                ordenados = state.allGames.sort((a, b) => b.name.localeCompare(a.name))
            }
            if (action.payload === "A Rating") {
                ordenados = state.allGames.sort((a, b) => (a.rating > b.rating ? 1 : -1))
            }
            if (action.payload === "D Rating") {
                ordenados = state.allGames.sort((a, b) => (a.rating < b.rating ? 1 : -1))
            }
            return {
                ...state,
                allGames: ordenados,
            }
        case FILTER_GENRES:
            filtrados = state.allGames.filter((game) => {
                const selectedGenres = Object.keys(action.payload).filter((genre) => action.payload[genre]);
                return selectedGenres.every((selectedGenre) => game.genres.includes(selectedGenre));
              });
            
            console.log(action.payload);

            return {
                ...state,
                allGames: state.allGames
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