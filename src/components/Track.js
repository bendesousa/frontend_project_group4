const Track = ({track, addToPlaylist, removeFromPlaylist}) => {

const handleClick = () => {
    addToPlaylist(track.id)
}

const handlePress = () => {
    removeFromPlaylist(track.id)
}

// If tracklist === playlist then NoDisplay button else display button 

    return (
        <>
       <h4> {track.name}</h4>
       <p> {track.artist.name} </p>
       <p> {track.genre} </p>
       <p> Track length: {track.length}mins </p>
        <button onClick={handleClick}>Add to playlist</button>
        <button onClick={handlePress}>Remove from playlist</button>
        </>
    )

}

export default Track;