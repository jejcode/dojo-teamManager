import React from "react";
import PlayerMenu from "../components/PlayerMenu";
import PlayerForm from "../components/PlayerForm";

const PlayerAdd = () => {
    return (
        <div className="row bg-light rounded p-4 m-4">
            <div className="col">
                <PlayerMenu />
                <PlayerForm />

            </div>
        </div>
    )
}

export default PlayerAdd