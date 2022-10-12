import TrackList from "./TrackList";
import User from "./User";

const Playlist = ({userTracks, addToPlaylist, users, playlists}) => {

    const userComponent = users.map((user) => { 
        return <User user={user} key={user.id} /> 
    })
    
    // const removeButton = () => {

    // }

     playlists.map((playlist) => { 
      return (  playlist={playlist} )
       
    })

    return (
        <>
        <h3>{playlists.name}</h3>
        <TrackList tracks={userTracks} addToPlaylist={addToPlaylist} users = {users}/>
        </>
    )

}

export default Playlist;