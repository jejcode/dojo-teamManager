import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link to={'/players/list'}>Manage Players</Link>
            <span className="mx-2">|</span>
            <Link to={'/status/game/1'}>Manage Player Status</Link>
        </>
    )
}

export default Header