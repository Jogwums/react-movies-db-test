import React, {createContext, useEffect, useReducer } from 'react'
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

    const removeMovieFromWatchList = (id) => {
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }
    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
      };
    
      const moveToWatchlist = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
      };
    
      const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
      };

    return(
        <GlobalState.Provider value={
            {
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchList,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
                
            }
          }
          >
            {props.children}
        </GlobalState.Provider>
    )
}

export default GlobalProvider;