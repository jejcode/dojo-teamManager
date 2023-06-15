import React from "react";
import { Link } from "react-router-dom";

const PlayerMenu = () => {
    return (
        <div className="mb-4">
            <Link to='/players/list'>List</Link>
            <span className="mx-2">|</span>
            <Link to='/players/addplayer'>Add Player</Link>
        </div>
    )
}

export default PlayerMenu