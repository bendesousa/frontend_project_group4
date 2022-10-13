import Track from "./Track";

const TrackList = ({tracks, addToPlaylist, removeFromPlaylist, playlistId}) => {

const trackComponent = tracks.map((track, index) => { 
    return <Track track={track} playlistId={playlistId} key={track.id + index} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/> 
})

    return (
        <>
            {trackComponent}
        </>
    )
}

export default TrackList;