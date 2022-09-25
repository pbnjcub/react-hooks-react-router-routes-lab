import React from "react"

function Movie({movie}) {
    return (
        <div>
            <p>Title: {movie.title} Time: {movie.time}</p>
            <ul>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    )
}

export default Movie