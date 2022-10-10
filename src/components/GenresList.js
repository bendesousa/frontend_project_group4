import Genre from "./Genre";

const GenresList = ({tracks}) => {

    return (
        <>
            <h3>GenresList</h3>
            <Genre tracks={tracks}/>
        </>
        
    )

}

export default GenresList;