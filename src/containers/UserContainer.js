import Playlist from "../components/Playlist";
import TrackList from "../components/TrackList";
import tracks from "../components/Track";
import Home from "../components/Home";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import GenresList from "../components/GenresList";
import filterTracks from "../components/Search";
import filteredTracks from "../components/Search";


const UserContainer = () => {



    
    return (
        <>

            <h1>UserContainer</h1>
            <Playlist />

                
        </>
        
        
    )

}

export default UserContainer;