import Playlist from "../components/Playlist";
import { useState, useEffect } from "react";


const UserContainer = ({tracks, addToPlaylist, removeFromPlaylist}) => {

    const[users, setUsers] = useState([]);

    const loadUserData = async () =>{
        const response = await fetch("http://localhost:8080/users")
        const data = await response.json()
        setUsers(data)
    };

    useEffect(() =>{loadUserData()},[]);

    const [playlists, setPlaylists] = useState([]);
    
    const loadPlaylistData = async () =>{
        const response = await fetch("http://localhost:8080/playlists/1")
        const data = await response.json()
        setPlaylists(data)
    };

    useEffect(() =>{loadPlaylistData()}, []);

    
    return (
        <>

         

            <Playlist userTracks={tracks} addToPlaylist = {addToPlaylist} users = {users} removeFromPlaylist={removeFromPlaylist} playlists={playlists}/>


                
        </>
        
        
    )

}

export default UserContainer;