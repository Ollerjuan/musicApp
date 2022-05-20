import React, { useState, useEffect } from "react";
import axios from "axios"
import Login from "./Login";


const Main = () => { 
    const [artists, setArtist] = useState('')
    const [token, setToken] = useState('')
    const [input, setInput ] = useState('')

     

    useEffect (() => {
    
        // hash is given to us after we have enterd the login info in the url 
        const hash = window.location.hash   
        let token = window.localStorage.getItem('token')
        // split and store in local storage

        if(token !== '' && hash){
        const _token = hash.split("&")[0].split("=")[1]
        window.localStorage.setItem('token', _token)
        setToken(_token)
        }
    }, [])
   
    

    const getArtist = async (searchArtist, token) => {   
        const data = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchArtist,
                type: "artist"
            }
        })

        setArtist(data.data.artists.items)   
    }

    const loaded = () => {
        return artists.map((artist) => (
            <div key={artist.id}>
                <h1> {artist.name} </h1>
                <img src={artist.images[0] ? artist.images[0].url:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgEDB//EADAQAAMAAgEBBQcCBwEAAAAAAAABAgMEEQUSITFBUSIyUmFxgZEjwRQzQqGx0eET/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP1sAAAAAAAAAAAAAAAAAAAAAAAAAAACLvbuPUjv9q692fUCS2kuW0l6s+FburL4efH9mZ7Z2c2zXOW+V5SvBfY+QGqxZsWX+Vkm/oz6GSiqilUNzS8GmWen1a1Sna4qfjS4aAugeJqkqlpp+DR6AAAAAAAAAAAHlNTLqnwkuWzLbOetjNWW/PwXojQdTrsaGZrzXH5fBmgAAAAAC26LtNV/DW+598fL5FyZbUpxtYaXirX+TUgAAAAAAAAAABF6lDvRzJLl8c/h8maNVsq3r5Vi9/svs/UyoAAAAABJ6dj/APXdwz5drl/bvNMZfTi8m1inHTmnXivJeZqAAAAAAAAAAAAGc6nrVr7NPj9O3zLS7voaM+G5rrZ16xvx8ZfowMuD1py2qXDXc0eAACX0vEsu9jVLlJ9p/YCx6RpZMHazZl2apcTL8UizAAAAAAAAAAAAAAR93ajVwur76fuz6sCi6mkt7N2fDtf3Ip1du7q6fLp8tnIAndGtTvyn/Umv3/YgnUU4ubnuqXygNaCPpbUbeLtS+LXvz6MkAAAAAAAA4zZYw46yZHxKA6IubqWribTydtryhc/8Kjd6hl2W5nmMXlKfj9SEBa5+sXXKwY+wvip8srcmS8tu8lOqfmzgAAAAAAHePJeK1eOnNLzRbavWJfE7U8P45Xd+CmAGsx5Yyz2sdzS9UzsyUXWOu1FOX6p8MstTq9y1Oz7U/EvFf7AuwcxU3KqGnLXKaOgBnuq7b2M7iX+nD4XzfqXW7leHUy2vFT3fUzAHgAAAAAAAAAAAAAAALPo228eVa9v2Lfs/Jl4ZFNy057mnyvqavDkWXDGRLhVKfAH/2Q=='} />
            </div>
        )
        )
    }

    const loading = () => {
        return <h2></h2>
    }
  
        
    const handleChange = (e) => {
        setInput(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(artists)
        getArtist(input, 'BQCCbUffMybBzm1st15oTMTRznupY0j8TINShzQf_EZvKe2e75kkpIII3oR3Kr3pvsVXSO446E_LJajwjhV3ZNwiPql97f1MWFNx93gtnU5nBIND1EOoNpeJeVDIbNEisbtv434MQ1hz5fXiYX0-iqg5YHSRIYbFbZB7Ruzw0xX36i6DUTs')
    }

        return(
            <div className="Main">
            <Login />
            <form onSubmit={handleSubmit}>  
                <input id="button" type= "text" onChange={handleChange} value={input}/>
                <button id="search" type="submit"> Search </button>
                
            </form>
            <div>
                {artists ? loaded() : loading()}
            </div>
       </div>
    )
}

export default Main;
