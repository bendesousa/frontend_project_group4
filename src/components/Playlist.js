import TrackList from "./TrackList";

const Playlist = ({userTracks, addToPlaylist, users, removeFromPlaylist, playlists}) => {

    // const userComponent = users.map((user) => { 
    //     return <User user={user} key={user.id} /> 
    // })
    
    return (
        <>
        {playlists.map((playlist, index) => {
            return <h3 key={index}>{playlist.name}</h3>
        })}
        <TrackList tracks={userTracks} addToPlaylist={addToPlaylist} users = {users} removeFromPlaylist={removeFromPlaylist}/>
        </>
    )
}

export default Playlist;