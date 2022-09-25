import React from "react"

function Director({director}) {
    return (
        <div>
            <p>Name: {director.name} </p>
            <ul>
                {director.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
        </div>
    )
}

export default Director