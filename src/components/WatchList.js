import React, {useContext} from 'react'
import {GlobalState} from '../context/GlobalState'
import MovieCard from './MovieCard'

const WatchList = () => {
    const { watchlist } = useContext(GlobalState)
    console.log(watchlist)

    return (
        <>
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">
                            My Movie Watchlist
                        </h1>
                    </div>
                    {watchlist.length > 0 ? (
                        <div className="movie-grid">
                            {watchlist.map(movie => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <h2 className="no-movies">
                            No movies in your list. add some!
                        </h2>
                    )}
                    
                </div>

            </div>
        </>
    )
}

export default WatchList
