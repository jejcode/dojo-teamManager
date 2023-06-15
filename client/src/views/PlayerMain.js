import React from "react";
import PlayerMenu from "../components/PlayerMenu";
import PlayerList from "../components/PlayerList";

const PlayerMain = () => {
    return (
        <div className="row bg-light rounded p-4 m-4">
            <div className="col-auto">
                <PlayerMenu />
                <PlayerList />
            </div>
        </div>
    )
}

export default PlayerMain