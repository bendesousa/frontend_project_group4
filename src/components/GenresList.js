import Genre from "./Genre";
import { useState, createContext, useContext } from "react";
const GenresList = ({tracks, addToPlaylist}) => {
    const genreComponent = tracks.map((track)=>{
        return <Genre track={track} key={track.id} />
    })

    // const UserContext = createContext();
    // const tracks = useState([]);
        const handleClick = () => {
        addToPlaylist(tracks.id)
    }
    return (
        <>
            <h3>GenresList</h3>
            {/* <UserContext.Provider value={tracks.genre}>
            <h1>Hello UserContext</h1>
            {tracks.genre}
            </UserContext.Provider> */}
            <ul>

            <h4>JAZZ:</h4>
            { 
                tracks
                .filter(track => track.genre === 'JAZZ')
                .map(tracks => <li key={tracks.trackId}>{tracks.name}</li>) 
                
            }< br />

            <h4>ROCK:</h4>
            { 
                tracks
                .filter(track => track.genre === 'ROCK')
                .map(tracks => <li key={tracks.trackId}>{tracks.name}</li>) 
            }<br />

            <h4>BLUES:</h4>
            { 
                tracks
                .filter(track => track.genre === 'BLUES')
                .map(tracks => <li key={tracks.trackId}>{tracks.name}</li>) 
            }<br />

            <h4>COUNTRY:</h4>
            { 
                tracks
                .filter(track => track.genre === 'COUNTRY')
                .map(tracks => <li key={tracks.trackId}>{tracks.name}</li>) 
            }<br />

            <h4>CLASSICAL:</h4>
            { 
                tracks
                .filter(track => track.genre === 'CLASSICAL')
                .map(tracks => <li key={tracks.trackId}>{tracks.name} <button onClick={handleClick}>Add to playlist</button></li>) 
            }<br />

            
            </ul>
            {genreComponent}
        </>
        
    )

}

export default GenresList;