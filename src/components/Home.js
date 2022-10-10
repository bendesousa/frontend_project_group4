import Search from "./Search";
import TrackList from "./TrackList";


const Home = ({filterTracks, filteredTracks}) => {

    return (
        <>
        <Search filterTracks={filterTracks}/>
        <TrackList  tracks={filteredTracks} />
        </>
    )

}

export default Home;