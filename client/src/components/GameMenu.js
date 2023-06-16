import React from "react";
import { Link } from "react-router-dom";

const GameMenu = (props) => {
    const {setGame} = props
    return (
        <div className="d-flex justify-content-center fs-4">
            <Link to='/status/game/1' >Game 1</Link>
            <span className="mx-3">|</span>
            <Link to='/status/game/2' >Game 2</Link>
            <span className="mx-3">|</span>
            <Link to='/status/game/3' >Game 3</Link>
            {/* <Link to='/status/game/1' onClick={() => {setGame(1)}}>Game 1</Link>
            <span className="mx-3">|</span>
            <Link to='/status/game/2' onClick={() => {setGame(2)}}>Game 2</Link>
            <span className="mx-3">|</span>
            <Link to='/status/game/3' onClick={() => {setGame(3)}}>Game 3</Link> */}
        </div>
    )
}

export default GameMenu