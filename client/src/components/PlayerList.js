import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getAllPlayers, deletePlayerById } from "../services/player-service";

const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getAllPlayers()
            .then(allPlayers => {
                setPlayers(allPlayers)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteThisPlayer = (playerId) => {
        // create pop up to verify user desire to delete
        //upon success:
        deletePlayerById(playerId)
            .then(res => {
                setPlayers(players.filter(player => player._id !== playerId))
                navigate('/players/list')
            })
            .catch(err => {
                // make a pop-up to notify of the error
            })
    }
    return (
        <div>
            {loaded ?
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Team Name</th>
                            <th scope="col">Preferred Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            const confirm = window.confirm(
                                                `Do you really want to remove ${player.name} from your team?`
                                            )
                                            if(confirm) deleteThisPlayer(player._id)}
                                            }>Delete</button>
                                    </td>
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

export default PlayerList