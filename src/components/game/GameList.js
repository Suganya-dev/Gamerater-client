import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from 'react-router-dom'

export const GameList = () => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)


    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">

        <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                history.push({ pathname: "/games/new" })
            }}
    >Register New Game</button>
    {
        games.map(game => {
            return <section key={`game--${game.id}`} className="game"> 
            <div className="game__title">{game.title}Title</div>


            </section>
        })
    }
    </article>
    )
}