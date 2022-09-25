import React from "react"

function Actor({actor}) {
    return (
        <div>
            <p>Name: {actor.name} </p>
            <ul>
                {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
        </div>
    )
}

export default Actor