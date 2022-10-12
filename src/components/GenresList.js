import Genre from "./Genre";
import { useState, createContext, useContext } from "react";
const GenresList = ({tracks, addToPlaylist}) => {
   
        const handleClick = (id) => {
        addToPlaylist(id)
    }
    return (
        <>
            <h3>GenresList</h3>
            <ul>

            <h4>JAZZ:</h4>
            { 
                tracks
                .filter(track => track.genre === 'JAZZ')
                .map(track => <li key={track.id}> {track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button> </li>) 
                
            }< br />

            <h4>ROCK:</h4>
            { 
                tracks
                .filter(track => track.genre === 'ROCK')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>BLUES:</h4>
            { 
                tracks
                .filter(track => track.genre === 'BLUES')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>COUNTRY:</h4>
            { 
                tracks
                .filter(track => track.genre === 'COUNTRY')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>CLASSICAL:</h4>
            { 
                tracks
                .filter(track => track.genre === 'CLASSICAL')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />
            
            <h4>ELECTRONIC:</h4>
            { 
                tracks
                .filter(track => track.genre === 'ELECTRONIC')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />


            <h4>HIPHOP:</h4>
            { 
                tracks
                .filter(track => track.genre === 'HIPHOP')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>METAL:</h4>
            { 
                tracks
                .filter(track => track.genre === 'METAL')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>ALTERNATIVE:</h4>
            { 
                tracks
                .filter(track => track.genre === 'ALTERNATIVE')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>SOUL:</h4>
            { 
                tracks
                .filter(track => track.genre === 'SOUL')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>RNB:</h4>
            { 
                tracks
                .filter(track => track.genre === 'RNB')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>FOLK:</h4>
            { 
                tracks
                .filter(track => track.genre === 'FOLK')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>POP:</h4>
            { 
                tracks
                .filter(track => track.genre === 'POP')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br />

            <h4>FUNK:</h4>
            { 
                tracks
                .filter(track => track.genre === 'FUNK')
                .map(track => <li key={track.id}>{track.name} <button onClick={()=>{handleClick(track.id)}}>Add to playlist</button></li>) 
            }<br /> 
            
            </ul>
            
        </>
        
    )

}

export default GenresList;