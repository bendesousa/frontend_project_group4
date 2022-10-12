import TrackList from "../components/TrackList";
import { useState, useEffect, createContext } from "react";
import Home from "../components/Home";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import GenresList from "../components/GenresList";
import UserContainer from "./UserContainer";
import React from "react";


const TrackContainer = () => {

    const [tracks, setTracks] = useState([]);
    
    const loadTrackData = async () =>{
        const response = await fetch("http://localhost:8080/tracks")
        const data = await response.json()
        setTracks(data)
    };

    useEffect(() =>{loadTrackData()},[])

    const [filteredTracks, setfilteredTracks] = useState([]);

    const filterTracks = (searchTerm) => {
       
        const foundTracks = tracks.filter(track => {
        return track.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
        setfilteredTracks(foundTracks)
    };

    const [userTracks, setUserTracks] = useState([]);

    // const ButtonFunctions = {
    //     addToPlaylist,
    //     removeFromPlaylist
    // }
    const addToPlaylist = async (id) => {
        const response = await fetch('http://localhost:8080/playlists/1/tracks/' + id, {
        method: 'POST', 
        headers:{'Content-Type': 'application/json'}
        })

        const updatedPlaylist = await response.json();
        setUserTracks([...updatedPlaylist.tracks]);
       
    }


    const removeFromPlaylist = async (id) => {
        const response = await fetch('http://localhost:8080/playlists/1/tracks/' + id, {
        method: 'DELETE', 
        headers:{'Content-Type': 'application/json'}
        })

        const updatedPlaylist = await response.json();
        setUserTracks([...updatedPlaylist.tracks]);
    }

    
        // const ButtonContext = React.createContext(addToPlaylist)
        // function 
        
   

    return (
        <BrowserRouter>
            <nav className='navbar'>
                <div className="logo"> Logo </div>
                <ul className="nav-links">
       

                <div className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tracks'>Tracks</Link></li>
                    <li><Link to='/tracks/genre'>Genre</Link></li>
                    <li><Link to='/playlist'>Playlist </Link></li> 
                    <li>
                    
                    <div className="dropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            Users
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                FK
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                HK
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                JP
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                MC
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                   
                    </div>
                    </li>

                </div>
               
                </ul>

            </nav>
   
            <Routes>
                    <Route path ='/' element={<Home filterTracks={filterTracks} filteredTracks={filteredTracks} addToPlaylist={addToPlaylist}/>} />
                    <Route path ='/tracks' element={<TrackList tracks={tracks} addToPlaylist={addToPlaylist}/>} />
                    <Route path ='/tracks/genre' element={<GenresList tracks={tracks} addToPlaylist={addToPlaylist}/>} />
                    <Route path ='/playlist' element={<UserContainer tracks={userTracks} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>} />
            </Routes>

            
        </BrowserRouter>
        
    )

}

export default TrackContainer;