import React from "react";
import {Link} from "react-router-dom"


const Nav = () => {
    return(
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/Logout">
                <div>Logout</div> 
            </Link>
           
        </div>
    )
}

export default Nav;