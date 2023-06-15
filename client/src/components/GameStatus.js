import React, {useState, useEffect} from "react";
// TODO: figure out which database call is correct
// get a list of players with that game's status

const GameStatus = (props) => {
    const {gameId} = props
    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        //make database call
        // setPlayers
        // setLoaded(true)
    }, [])
}

export default GameStatus