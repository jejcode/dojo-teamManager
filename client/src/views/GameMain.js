import React from "react";
import { useParams } from "react-router-dom";
import GameMenu from "../components/GameMenu";
import GameStatus from "../components/GameStatus";
const GameMain = () => {
    const {gameId} = useParams()
    return (
        <div>
            <h1>Player Status - Game {gameId}</h1>
            <GameMenu />
            <GameStatus gameId={gameId}/>
        </div>
    )
}

export default GameMain