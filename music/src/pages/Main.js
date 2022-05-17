import React, { useEffect, useState } from "react";
import axios from "axios"

const Main = () => { 
    const url = `https://api.spotify.com/v1/search`
    const [token, setTokem] = useState('')
    let urlParams = new URLSearchParams(window.location.hash.replace(''))

    useEffect (() => {
        // hash is given to us after we have enterd the login info in the url 
        let token = window.localStorage.getItem('token')
        let hash = window.location.hash

        //if
        if (token !== '' && hash){
            let url = window.location
            let access_token = new URLSearchParams(url.search).get('access_token')
        }
    
    })
        
        
        

        

        
    return(
        <div className="Main">
            <form>
                <input type= "text"/>
                    <button type="submit"> Search </button>
              
            </form>
       </div>
    )
}







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
    export default Main;
