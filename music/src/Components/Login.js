// import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import React from "react"


const Login = () => {
    const CLIENT_ID= "14b01a092c544820bcdf006502843b5e"
        const REDIRECT_URI = "http://localhost:3000"
        const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
        const RESPONSE_TYPE = "token"


    
    
    return (
  
            <div className="Login">
                    <a id="login" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> Click here to Login </a>
                
            </div>
    )


    // return (
    //     <Router>
    //         <div>
    //             <Link to="/">Main</Link>
    //         </div>
    //         <Switch>
    //             <Route path="/" exact>
    //                 <Main />
    //             </Route>
    //         </Switch>
    //     </Router>
    // )
}
    
export default Login;
