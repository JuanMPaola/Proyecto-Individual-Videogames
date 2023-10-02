import axios from "axios";

export const GET_GAMES = "GET_GAMES"
export const GET_BY_NAME = "GET_BY_NAME"
export const CLEAR_STATE = "CLEAR_STATE"
export const GET_BY_ID = "GET_BY_ID"
export const GET_GENRES = "GET_GENRES"
export const SUMBIT_GAME= "SUMBIT_GAME" 

export function getGames(){
    return async function(dispatch) {
        const response = await axios ("http://localhost:3001/videogames")
        return dispatch({
            type: GET_GAMES,
            payload: response.data 
        })
    }
}

export function getByName(name){
    return async function(dispatch) {
        const response = await axios (`http://localhost:3001/videogames/name?name=${name}`)
        return dispatch({
            type: GET_BY_NAME,
            payload: response.data 
        })
    }
}

export function getById(id){
    return async function(dispatch){
        const response = await axios (`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: GET_BY_ID,
            payload: response.data,
        })
    }
}

export function sumbitGame(data){
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/videogames`, data)
        return dispatch({
            type: SUMBIT_GAME,
            payload: [response.data]
        })
    }
}

export function getGenres (){
    return async function(dispatch){
        const response = await axios ("http://localhost:3001/genres")
        return dispatch({
            type: GET_GENRES,
            payload: response.data
        })
    }
}

export function clearState (){
    return function(dispatch){
        return dispatch({
            type: CLEAR_STATE,
            payload: []
        })
    }
}
