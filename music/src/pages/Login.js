import React, { useEffect, useState } from "react";

const Login = () => {
        const CLIENT_ID= "14b01a092c544820bcdf006502843b5e"
        const redirect_uri = "http://localhost:3000"
        const authorization_endPoint = "https://accounts.spotify.com/authorize"
        const response_type = "token"
        const [token, setToken] = useState ('')

        useEffect (() => {
            // hash is given to us after we have enterd the login info in the url 
            const hash = window.location.hash   
            // split and store in local storage
            const getToken = hash.substring(1).split("&")[0].split("=")[1]
            window.localStorage.setItem('token', getToken)
            setToken(getToken)
    }, [])
    
    return (
        // link to and from authorization route 
            <div className="Login">
                    <a id="login" href={`${authorization_endPoint}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=${response_type}`}> Click here to Login </a>
      
            </div>
    )

}
    
export default Login;
