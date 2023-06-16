import React, {useState, useEffect} from "react";
import { updateOnePlayer } from "../services/player-service";

const StatusForm = (props) => {
    const {player, gameId, setUpdatedPlayer} = props
    const gameKey = `game${gameId}Status`

    const changeStatus = (statusId) => {
        // setStatus(statusId)
        const statusObj = {}
        statusObj[gameKey] = statusId
        updateOnePlayer(player._id, statusObj)
        .then(updatedPlayer => {
            setUpdatedPlayer(updatedPlayer)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {player[gameKey] === 2 ?
                <button className="btn btn-sm btn-success">Playing</button>
                :
                <button className="btn btn-sm btn-outline-success"  onClick={() => {changeStatus(2)}}>Playing</button>
            }
            {player[gameKey] === 1 ?
                <button className="btn btn-sm btn-danger mx-4">Not Playing</button>
                :
                <button className="btn btn-sm btn-outline-danger mx-4" onClick={() => {changeStatus(1)}}>Not Playing</button>
            }
            {!player[gameKey] ?
                <button className="btn btn-sm btn-warning">Undecided</button>
                :
                <button className="btn btn-sm btn-outline-warning" onClick={() => {changeStatus(0)}}>Undecided</button>
            
            }
        </div>
    )
}

export default StatusForm