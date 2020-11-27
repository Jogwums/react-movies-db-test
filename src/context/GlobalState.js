import React, {createContext, useState, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],

}

//create context 
export const GlobalState = createContext(initialState)

//provider
const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    //actions
    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    return(
        <GlobalState.Provider value={
            {
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchList,
            }
          }
          >
            {props.children}
        </GlobalState.Provider>
    )
}

export default GlobalProvider;