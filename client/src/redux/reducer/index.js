import { CLEAR_STATE, GET_BY_ID, GET_BY_NAME, GET_GAMES, SUMBIT_GAME, GET_GENRES, GET_PLATFORMS, ORDER_UPDOWN, FILTER_BY_ORIGIN, FILTER_GENRES } from "../actions";

let initialState = { allGames: [], allGenres: [], platflorms: [], aux: [], selectedGenres: {} }

function rootReducer(state = initialState, action) {
    let ordenados;
    let filtrados;
    let generos;

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
/*             if(!generos?.includes(action.payload)) generos?.push(action.payload)
            else if (generos?.includes(action.payload)) generos = generos?.filter((genre)=> genre !== action.payload)
            
            console.log(generos) */


            // Clonar el objeto de géneros seleccionados actual
            const selectedGenresCopy = { ...state.selectedGenres };

            if (!selectedGenresCopy[action.payload]) {
                // Si el género no está seleccionado, marcarlo como seleccionado
                selectedGenresCopy[action.payload] = true;
            } else {
                // Si el género ya está seleccionado, desmarcarlo
                delete selectedGenresCopy[action.payload];
            }

            const selectedGenres = state.selectedGenres;
            // Filtrar los juegos en función de los géneros seleccionados
            filtrados = state.allGames.filter((game) => {
                return Object.keys(selectedGenres).every(
                    (selectedGenre) => game.genres.includes(selectedGenre)
                );
            });

            console.log(selectedGenres)

            return {
                ...state,
                allGames: filtrados,
            };

        case FILTER_BY_ORIGIN:
            const todos = [...state.allGames, ...state.aux];

            if (action.payload === "DB") {
                filtrados = todos.filter((game) => {
                    return typeof game.id === 'string' && game.id.includes("-");
                });
                return {
                    ...state,
                    aux: state.allGames,
                    allGames: filtrados,
                };
            }
            if (action.payload === "API") {
                filtrados = todos.filter((game) => {
                    return typeof game.id === 'number';
                });
                return {
                    ...state,
                    aux: state.allGames,
                    allGames: filtrados,
                };
            }
            if (action.payload === "All") {
                return {
                    ...state,
                    allGames: todos,
                };
            }
            break;
        case CLEAR_STATE:
            return {
                allGames: []
            }
        default:
            return state
    }
}

export default rootReducer;