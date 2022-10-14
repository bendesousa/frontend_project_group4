import Search from "./Search";
import TrackList from "./TrackList";
import PlaylistForm from "./PlaylistForm";

const Home = ({filterTracks, filteredTracks, addToPlaylist, addPlaylist}) => {

    return (
        <>
        <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <h3><br /> <br /> <br />Search for a song</h3>
        <Search  filterTracks={filterTracks}/>
        <TrackList  tracks={filteredTracks} addToPlaylist={addToPlaylist} />
        <PlaylistForm addPlaylist={addPlaylist}/>
        </>
    )
}

export default Home;