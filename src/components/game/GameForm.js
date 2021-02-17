import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from 'react-router-dom'


export const GameForm = () => {
    const history = useHistory()
    const {createGame} = useContext(GameContext)

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        title: "",
        description:"",
        designer:"",
        Number_of_players: 0,
        releaseYear: "",
        timeToPlay: "",
        ageRec:0,
        categoryId: 0
    })

    /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    // */
    // useEffect(() => {
    //     getGameTypes()
    // }, [])

    /*
        REFACTOR CHALLENGE START

        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?

        One hint: [event.target.name]
    */
    const changeGameTitleState = (domEvent) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[domEvent.target.name] = domEvent.target.value
        setCurrentGame(newGameState)
    }


    /* REFACTOR CHALLENGE END */

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameTitleState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Description: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameTitleState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Designer: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={changeGameTitleState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Num of Players: </label>
                    <input type="number" name="title" required autoFocus className="form-control"
                        value={currentGame.Number_of_players}
                        onChange={changeGameTitleState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Release Year: </label>
                    <input type="year" name="title" required autoFocus className="form-control"
                        value={currentGame.releaseYear}
                        onChange={changeGameTitleState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Time to play: </label>
                    <input type="time" name="title" required autoFocus className="form-control"
                        value={currentGame.timeToPlay}
                        onChange={changeGameTitleState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Age: </label>
                    <input type="number" name="title" required autoFocus className="form-control"
                        value={currentGame.ageRec}
                        onChange={changeGameTitleState}
                    />
                </div>
            </fieldset>


            {/* You create the rest of the input fields for each game property */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        title: currentGame.title,
                        description: currentGame.description,
                        designer: currentGame.designer,
                        timeToPlay:currentGame.timeToPlay,
                        ageRec:currentGame.ageRec,
                        Number_of_players: parseInt(currentGame.Number_of_players),
                        releaseYear: parseInt(currentGame.releaseYear),
                        categoryId: parseInt(currentGame.categoryId)
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create Game</button>
        </form>
    )
}