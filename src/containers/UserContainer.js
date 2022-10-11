import Playlist from "../components/Playlist";
import { useState, useEffect } from "react";


const UserContainer = ({tracks, addToPlaylist}) => {

    const[users, setUsers] = useState([]);

    const loadUserData = async () =>{
        const response = await fetch("http://localhost:8080/users")
        const data = await response.json()
        setUsers(data)
    };

    useEffect(() =>{loadUserData()},[])



    
    return (
        <>

            <h1>UserContainer</h1>
            <Playlist userTracks={tracks} addToPlaylist = {addToPlaylist} users = {users} />

                
        </>
        
        
    )

}

export default UserContainer;