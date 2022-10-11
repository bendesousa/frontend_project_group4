import TrackList from "./TrackList";
import User from "./User";

const Playlist = ({userTracks, addToPlaylist, users}) => {

    const userComponent = users.map((user) => { 
        return <User user={user} key={user.id} /> 
    })
    
    return (
        <>
        <h3>Playlist</h3>
        <TrackList tracks={userTracks} addToPlaylist={addToPlaylist} users = {users}/>
        </>
    )

}

export default Playlist;