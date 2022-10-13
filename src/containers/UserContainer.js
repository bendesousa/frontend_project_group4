import Playlist from "../components/Playlist";

const UserContainer = ({tracks, addToPlaylist, removeFromPlaylist, users, playlists, addPlaylist}) => {

    return (
        <>
            {/* <Home addPlaylist={addPlaylist} filterTracks={tracks}/> */}
            <Playlist userTracks={tracks} addToPlaylist = {addToPlaylist} users = {users} removeFromPlaylist={removeFromPlaylist} playlists={playlists} addPlaylist={addPlaylist}/>    
        </> 
    )
}

export default UserContainer;