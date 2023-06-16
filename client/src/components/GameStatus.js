import React, {useEffect, useState} from "react";
import StatusForm from "./StatusForm";
import { getAllPlayers } from "../services/player-service";

const GameStatus = (props) => {
    const {gameId} = props

    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [updatedPlayer, setUpdatedPlayer] = useState({})

    useEffect(() => {
        console.log('re-render in progress')
        getAllPlayers()
            .then(players => {
                setPlayers(players)
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
                setLoaded(false)
            })
    }, [updatedPlayer])
    return (
        <div>
            {loaded ?
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Game Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player,index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td><StatusForm player={player} setUpdatedPlayer={setUpdatedPlayer} gameId={gameId}/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            :
            <p>Loading...</p>
            }
        </div>
    )
}

export default GameStatus