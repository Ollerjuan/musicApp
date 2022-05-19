import React, { useState, useEffect } from "react";
import axios from "axios"
import Login from "./Login";
// import { useParams } from "react-router";

const Main = () => { 
    const [searchKey, setSearchKey] = useState('')
    const [artists, setArtist] = useState('')
    const [token, setToken] = useState('')

     

    useEffect (() => {
    
        // hash is given to us after we have enterd the login info in the url 
        const hash = window.location.hash   
        // split and store in local storage

        if(token !== '' & hash){
        const _token = hash.split("&")[0].split("=")[1]
        window.localStorage.setItem('token', _token)
        setToken(_token)
        }
    }, [])

    const getArtist = async (searchArtist, token) => {   
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchArtist,
                type: "artist"
            }
        })
        console.log(data.artists.items)

        setArtist(data.artists.items)
        // console.log(artists)
        // let {data} = res.data 

        // setArtist.item.use(async function(config){
        //     config.headers.searchKey.Authorization = 'Bearer + token';
        // })
        // setArtist(data.artists)
    }
    const handleChange = (e) => {
        setArtist(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(artists)
        getArtist(artists, 'token here')
    }

    // const test = getArtist('token here')
    // console.log(test)
//render artist from url
        
        
        return(
            <div className="Main">
            <Login />
            <form onSubmit={handleSubmit}>
            
                <input id="button" type= "text" onChange={handleChange} value={artists}/>
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
   