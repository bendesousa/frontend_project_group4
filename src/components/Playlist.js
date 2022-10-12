import TrackList from "./TrackList";
import User from "./User";


const Playlist = ({userTracks, addToPlaylist, users, removeFromPlaylist, playlists}) => {

    const userComponent = users.map((user) => { 
        return <User user={user} key={user.id} /> 
    })
    
    // const removeButton = () => {

    // }

    //  playlists.map((playlist) => { 
    //   return (  playlist={playlist} )
       
    // })

    return (
        <>

        {playlists.map((playlist, index) => {
            return <h3 key={index}>{playlist.name}</h3>
        })}
        {/* <h3>{playlists.name}</h3> */}
        <TrackList tracks={userTracks} addToPlaylist={addToPlaylist} users = {users} removeFromPlaylist={removeFromPlaylist}/>

        </>
    )

}

export default Playlist;