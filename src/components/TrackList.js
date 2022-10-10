import Track from "./Track";
import GenresList from "./GenresList";

const TrackList = ({tracks}) => {

const trackComponent = tracks.map((track) => { 
    return <Track track={track} key={track.id}/> //Track id isn't working like we expect to for keys
})



    return (
        <>
            <h2>TrackList</h2>
            {trackComponent}
            <GenresList tracks={tracks}/>
        </>
    )

}

export default TrackList;