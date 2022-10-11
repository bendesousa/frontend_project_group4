import TrackList from "../components/TrackList";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import {BrowserRouter, Route, Routes, Link, json} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import GenresList from "../components/GenresList";
import Playlist from "../components/Playlist";


const TrackContainer = () => {

    const[tracks, setTracks] = useState([]);
    
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

    // const userTracks = () => {

    // }


    const addToPlayList = async ({id}) => {
        const response = await fetch('…/playlists/{playlistId}/tracks/' + id, 
        {method: 'POST', 
        headers:{'Content-Type':'application/json'} ,
        body: JSON.stringify(id)})

        const savedTrack = await response.json();
        setUserTracks([...tracks, savedTrack]);
        
    }
    
   

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
                    <Route path ='/' element={<Home filterTracks={filterTracks} filteredTracks={filteredTracks}/>} />
                    <Route path ='/tracks' element={<TrackList tracks={tracks} addToPlayList={addToPlayList}/>} />
                    <Route path ='/tracks/genre' element={<GenresList />} />
                    <Route path ='/playlist' element={<Playlist tracks={userTracks} />} />
            </Routes>

            
        </BrowserRouter>
        
    )

}

export default TrackContainer;