import React from 'react'

const MovieCard = ({movie}) => {

    return (
        <div>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title.substring(0,5)}/>
            </div>
        </div>
    )
}

export default MovieCard
