import Search from "./Search";
import TrackList from "./TrackList";


const Home = ({filterTracks, filteredTracks, addToPlaylist}) => {

    return (
        <>
        <Search filterTracks={filterTracks}/>
        <TrackList  tracks={filteredTracks} addToPlaylist={addToPlaylist} />
        </>
    )

}

export default Home;