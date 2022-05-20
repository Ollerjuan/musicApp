import React from "react"

const Login = () => {
        const CLIENT_ID= "14b01a092c544820bcdf006502843b5e"
        const redirect_uri = "http://localhost:3000"
        const authorization_endPoint = "https://accounts.spotify.com/authorize"
        const response_type = "token"

    return (
        // link to and from authorization route 
        <div className="Login">
            <a id="login" href={`${authorization_endPoint}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=${response_type}`}> Click here to Login </a>
        </div>
         )
    
}
export default Login;
