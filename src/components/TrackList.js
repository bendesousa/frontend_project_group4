import Track from "./Track";
import GenresList from "./GenresList";



const TrackList = ({tracks, addToPlaylist, removeFromPlaylist}) => {

const trackComponent = tracks.map((track) => { 
    return <Track track={track} key={track.id} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/> 
})



    return (
        <>
            <h2>TrackList</h2>
            {trackComponent}
        </>
    )

}

export default TrackList;