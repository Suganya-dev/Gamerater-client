import React, { useContext, useEffect, useState } from "react"
import {GameContext} from "./GameProvider.js"


export const GameDetail = (props) => {
    const { getGameById } = useContext(GameContext)
    const [game, setGame] = useState({"gamer":{"user":{}}})

    useEffect(() => {
        const gameId = parseInt(props.match.params.gameId)
        getGameById(gameId)
        .then(setGame)
        
    }, [])

    return (
        <section className="game">
            <h3 className="game__title">{game.title}</h3>
            <div className="game__play">Gamer name: {game.gamer.user.first_name}</div>
            <div className="game__number">Number of Players: {game.number_of_players}</div>
            <div className="game__year">Year Created: {game.year}</div>
            <div className="game__play">Play-time: {game.play_time}</div>
            <div className="game__age">Age Recommendation: {game.age_recommendation}</div>  
        </section>
    )
}
