import React, { useState } from "react"
export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
  
    const getGames = () => {
        return fetch("http://localhost:8000/games", { 
            method: "GET",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }

    const createGame = (game) => {
        return fetch("http://localhost:8000/games", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(game)
        })
            // .then(response => response.json())
            .then(getGames)
    }


return (
    <GameContext.Provider value={{ games,createGame,getGames}} >
        { props.children }
    </GameContext.Provider>
)
}

