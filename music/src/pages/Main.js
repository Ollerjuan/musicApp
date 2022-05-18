import React, { useEffect, useState } from "react";
import axios from "axios"
import Login from "./Login";

const Main = () => { 
    const url = `https://api.spotify.com/v1/search`
    const [token, setToken] = useState('')
    let urlParams = new URLSearchParams(window.location.hash.replace(''))


//     useEffect (() => {
//         // hash is given to us after we have enterd the login info in the url 
    
//         const hash = window.location.hash   
//         console.log(hash.split("&"))
// }, [])
        // let url = window.location
        // let access_token = new URLSearchParams(url.search).get('access_token')
        
        //     window.location.hash = ""
        //     window.localStorage.setItem('token', token)
        // setToken(token)
    



        
        
        

        

        
    return(
        <div className="Main">
            <Login />
            <form>
                <input type= "text"/>
                    <button id="search" type="submit"> Search </button>
              
            </form>
       </div>
    )
}

export default Main;



// export function backgroundColor() {
//     return (
//         <div>
//                 <div style={{ backgroundColor: "#4D8581", width: "98%", maxHeight: "690px"}}>
//                 <h2 style={{ padding: "10px 20px"}}></h2>
                
//                 <div style={{ backgroundColor: "#ABDED7", width: "20%", minHeight: "590px",}}>
//                 <h3 style={{ padding: "10px 20px"}}></h3>
//                 </div>
//             </div>
//         </div>
        
//     )
// }
   