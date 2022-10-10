import TrackList from "../components/TrackList";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import GenresList from "../components/GenresList";
import Search from "../components/Search";

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
        console.log(tracks.length)
        const foundTracks = tracks.filter(track => {
        return track.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
        setfilteredTracks(foundTracks)
    };
    
   

    return (
        <BrowserRouter>
            <header className='header'>
                <h1>Logo</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tracks'>Tracks</Link></li>
                    <li><Link to='/tracks/genre'>Genre</Link></li>
                    {/* <li><Link to='/playlist'>Playlist </Link></li> // Playlist by ID */}
                    <li> Users</li>
                </ul>
                <Routes>
                    <Route path ='/' element={<Home filterTracks={filterTracks} filteredTracks={filteredTracks}/>} />
                    <Route path ='/tracks' element={<TrackList tracks={tracks}/>} />
                    <Route path ='/tracks/genre' element={<GenresList />} />
                    {/* <Route path ='/playlist' element={<Contact />} /> */}
                </Routes>
            </header>
        </BrowserRouter>
        
    )

}

export default TrackContainer;