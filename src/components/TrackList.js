import Track from "./Track";
import GenresList from "./GenresList";



const TrackList = ({tracks, addToPlaylist}) => {

const trackComponent = tracks.map((track) => { 
    return <Track track={track} key={track.id} addToPlaylist={addToPlaylist}/> 
})



    return (
        <>
            <h2>TrackList</h2>
            {trackComponent}
            <GenresList tracks={tracks}/>
            
        </>
    )

}

export default TrackList;