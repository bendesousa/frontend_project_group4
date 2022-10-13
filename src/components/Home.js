import Search from "./Search";
import TrackList from "./TrackList";
import PlaylistForm from "./PlaylistForm";

const Home = ({filterTracks, filteredTracks, addToPlaylist, addPlaylist}) => {

    return (
        <>
        <h3>Search for a song</h3>
        <Search filterTracks={filterTracks}/>
        <TrackList  tracks={filteredTracks} addToPlaylist={addToPlaylist} />
        <PlaylistForm addPlaylist={addPlaylist}/>
        </>
    )
}

export default Home;