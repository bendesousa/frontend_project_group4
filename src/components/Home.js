import Search from "./Search";
import TrackList from "./TrackList";
import PlaylistForm from "./PlaylistForm";


const Home = ({filterTracks, filteredTracks, addToPlaylist, addPlaylist}) => {

    return (
        <>
    
        <Search filterTracks={filterTracks}/>
        <TrackList  tracks={filteredTracks} addToPlaylist={addToPlaylist} />
        <PlaylistForm addPlaylist={addPlaylist}/>
        </>
    )

}

export default Home;