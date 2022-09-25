import React from "react";
import { actors } from "../data";
import Actor from "./Actor"

function Actors() {
  return ( 
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
          <Actor key={actor.name} actor={actor} />
        ))}
    </div>
  )
}

export default Actors;
