// import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import GameMenu from "../components/GameMenu";
import GameStatus from "../components/GameStatus";
// import { getAllPlayers } from "../services/player-service";
const GameMain = () => {
    const {gameId} = useParams()
    

    return (
        <div className="row bg-light rounded p-4 m-4">
            <div className="col">
                <h1>Player Status - Game {gameId}</h1>
                <GameMenu />
                <GameStatus gameId={gameId} />
            </div>
        </div>
    )
}

export default GameMain