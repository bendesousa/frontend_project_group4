import TrackList from "./TrackList";

const Playlist = ({userTracks}) => {

    return (
        <>
        <h3>Playlist</h3>
        <TrackList tracks={userTracks} />
        </>
    )

}

export default Playlist;