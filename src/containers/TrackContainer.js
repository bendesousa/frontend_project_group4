import TrackList from "../components/TrackList";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import GenresList from "../components/GenresList";
import UserContainer from "./UserContainer";
import React from "react";
import Logo from "../assets/logo_season_2.png";


const TrackContainer = () => {
    const[users, setUsers] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [userTracks, setUserTracks] = useState([]);
    const [filteredTracks, setfilteredTracks] = useState([]);
    const [tracks, setTracks] = useState([]);
    
    const loadTrackData = async () =>{
        const response = await fetch("http://localhost:8080/tracks")
        const data = await response.json()
        setTracks(data)
    };

    useEffect(() =>{loadTrackData()},[])

    const filterTracks = (searchTerm) => {
       
        const foundTracks = tracks.filter(track => {
        return track.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
        setfilteredTracks(foundTracks)
    };


    const addToPlaylist = async (id) => {
        const response = await fetch('http://localhost:8080/playlists/1/tracks/' + id, {
        method: 'POST', 
        headers:{'Content-Type': 'application/json'}
        })

        const updatedPlaylist = await response.json();
        setUserTracks([...updatedPlaylist.tracks]);
       
    }


    const removeFromPlaylist =  async(playlistId, trackId) => {
        await fetch(`http://localhost:8080/playlists/${playlistId}/tracks/${trackId}`, {
            method: 'DELETE', 
            headers: {'Content-Type': 'application/json'}
        })

        let newPlaylists = playlists
        const index = playlists.findIndex(playlist => playlist.id === playlistId)
        //console.log([3], [2] => filter)
        newPlaylists[index].tracks = playlists[index].tracks.filter(track => track.id !== trackId)
        // console.log ????????????
        // array.filter :(
        // const result = filter :)
        

        setPlaylists([...newPlaylists])
        

        
    }


    const loadUserData = async () =>{
        const response = await fetch("http://localhost:8080/users")
        const data = await response.json()
        setUsers(data)
    };

    useEffect(() =>{loadUserData()},[]);

    
    const loadPlaylistData = async () =>{
        const response = await fetch("http://localhost:8080/playlists/2")
        const data = await response.json()
        setPlaylists(data)
    };

    useEffect(() =>{loadPlaylistData()}, []);

    // const [userPlaylists, setUserPlaylists] = useState([]);

    const addPlaylist = async (newPlaylist) => {
        const response = await fetch('http://localhost:8080/playlists/'+ users[0].id +'/' + newPlaylist.name , {
        method: 'POST', 
        headers:{'Content-Type': 'application/json'},
        })

        const addedPlaylist = await response.json();
        setPlaylists([...playlists, addedPlaylist]);
       
    }
        
    return (
        <BrowserRouter>
            <nav className='navbar'>
                <div className="logo">
                    <img src={Logo} alt="API Rangers Season 2" width={300}/>
                </div>
                <ul className="nav-links">
                <div className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tracks'>Tracks</Link></li>
                    <li><Link to='/tracks/genre'>Genre</Link></li>
                    <li><Link to='/playlist'>Playlist </Link></li> 
                    <li>

                    <div className="animated-button">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark">
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
                    <Route path ='/' element={<Home filterTracks={filterTracks} filteredTracks={filteredTracks} addToPlaylist={addToPlaylist} addPlaylist={addPlaylist}/>} />
                    <Route path ='/tracks' element={<TrackList tracks={tracks} addToPlaylist={addToPlaylist}/>} />
                    <Route path ='/tracks/genre' element={<GenresList tracks={tracks} addToPlaylist={addToPlaylist}/>} />
                    <Route path ='/playlist' element={<UserContainer tracks={userTracks} addToPlaylist={addToPlaylist} 
                    removeFromPlaylist={removeFromPlaylist} users={users} playlists={playlists} addPlaylist={addPlaylist}/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default TrackContainer;