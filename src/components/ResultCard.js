import React, {useContext} from 'react'
import {GlobalState} from '../context/GlobalState'

import './css/result_card.css'

const ResultCard = ({movie}) => {
    const {addMovieToWatchList, watchlist} = useContext(GlobalState);
    // console.log(watchlist)

    let storedMovie = watchlist.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : false;



    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img 
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                ) : (
                    <div className="temp-poster"></div>
                )}
            </div>
            <div className="info">
                    <div className="header">
                        <h3 className="title">{movie.title}</h3>
                        <h4 className="release-date">
                            {movie.release_date ? (movie.release_date.substring(0,4) ): ""}
                        </h4>
                    </div>
                    <div className="controls">
                        <button className="btn"
                            disabled={watchlistDisabled}
                            onClick={() => addMovieToWatchList(movie)}>
                            Add to WatchList
                        </button>
                    </div>
            </div>
            
        </div>
    )
}

export default ResultCard
