import React from 'react'
import MovieControls from './MovieControls'

const MovieCard = ({movie, type}) => {

    return (
        
            <div className="card">
                <div className="ovelay"></div>
                {
                    movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        alt={movie.title.substring(0,5)}/>
                    ) : (
                        <div className="temp-poster">

                        </div>
                    )
                }

                <MovieControls type={type} movie={movie} />
                
            </div>
        
    )
}

export default MovieCard
