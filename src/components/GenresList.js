import Genre from "./Genre";

const GenresList = ({tracks}) => {
    const genreComponent = tracks.map((track)=>{
        return <Genre track={track} key={track.id} />
    })
    return (
        <>
            <h3>GenresList</h3>
            {genreComponent}
        </>
        
    )

}

export default GenresList;