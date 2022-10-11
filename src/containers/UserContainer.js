import Playlist from "../components/Playlist";
import { useState, useEffect } from "react";


const UserContainer = () => {

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
            <Playlist tracks={userTracks} />

                
        </>
        
        
    )

}

export default UserContainer;