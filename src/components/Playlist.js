import TrackList from "./TrackList";

const Playlist = ({userTracks, addToPlayList}) => {

    return (
        <>
        <h3>Playlist</h3>
        <TrackList tracks={userTracks} addToPlayList={addToPlayList}/>
        </>
    )

}

export default Playlist;