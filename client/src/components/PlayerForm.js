import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createPlayer } from "../services/player-service";

const PlayerForm = () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        createPlayer({name, position})
            .then( newPlayer => {
                navigate('/players/list')
            })
            .catch( err => {
                const errorResponse = err.response.data.errors
                setErrors(errorResponse)
            })
    }
    return (
        <>
            <h1>Add Player</h1>
            <form onSubmit={(e) => submitHandler(e)}>
                <div className="mb-2">
                    <label htmlFor="playerName" className="form-label">Player Name:</label>
                    <input className="form-control" type="text" name="playerName" id="playerName" onChange={(e) => {setName(e.target.value)}} value={name}/>
                    {errors.name && <p className="text-danger mb-2">*{errors.name.message}</p>}
                </div>
                <div className="mb-2">
                    <label htmlFor="playerPosition" className="form-label">Preferred Position:</label>
                    <input className="form-control" type="text" name="playerPosition" id="playerPosition" onChange={(e) => {setPosition(e.target.value)}} value={position}/>
                </div>
                <div className="d-flex justify-content-end">
                    {name.length < 1 ?
                        <button type="button" className="btn btn-light btn-sm">Add Player</button>
                        :
                        <input className="btn btn-success btn-sm" type="submit" value="Add Player" />
                    }
                </div>
            </form>
        </>
    )
}

export default PlayerForm