const Track = ({track, addToPlaylist, removeFromPlaylist, playlistId}) => {

const handleClick = () => {
    addToPlaylist(track.id)
}

const handlePress = () => {
    removeFromPlaylist(playlistId, track.id)
}


// If tracklist === playlist then NoDisplay button else display button 

    return (
        <>
       <h3>{track.name}</h3>
       <h5> Artist: {track.artist.name} </h5>
       <h6> Genre: {track.genre} </h6>
       <h7>  {track.length}mins </h7>
       { addToPlaylist ? <button onClick={handleClick}>Add to playlist</button> : <button onClick={handlePress}>Remove from playlist</button>}<br /> <br /> <br /> <br />
        </>
    )

}

export default Track;