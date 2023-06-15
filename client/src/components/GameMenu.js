import React from "react";
import { Link } from "react-router-dom";

const GameMenu = () => {
    return (
        <div>
            <Link to='/status/game/1'>Game 1</Link>
            <span className="mx-2">|</span>
            <Link to='/status/game/2'>Game 2</Link>
            <span className="mx-2">|</span>
            <Link to='/status/game/3'>Game 3</Link>
        </div>
    )
}

export default GameMenu