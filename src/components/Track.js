const Track = ({track}) => {

    return (
        <>
       <h4> {track.name}</h4>
       <p> {track.artist.name} </p>
       <p> {track.genre} </p>
       <p> Track length: {track.length}mins </p>
        
        </>
    )

}

export default Track;