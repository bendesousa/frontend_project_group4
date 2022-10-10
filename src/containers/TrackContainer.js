import TrackList from "../components/TrackList";
import { useState, useEffect } from "react";

const TrackContainer = () => {

    const[tracks, setTracks] = useState([]);
    
    const loadTrackData = async () =>{
        const response = await fetch("http://localhost:8080/tracks")
        const data = await response.json()
        setTracks(data)

        //setTracks(data => setTracks(data))

        console.log(data);

    }

    useEffect(() =>{loadTrackData()},[])
    
    return (
        <>
            <h1>Track Container</h1>
            <TrackList tracks={tracks}/>
        </>
    )

}

export default TrackContainer;