import { useState } from "react";

const PlaylistForm = ({addPlaylist}) => {

    const [statePlaylist, setStatePlaylist] = useState(
        {
            name: "", 
        }
    )

    const handleChange = (event) => {

        let playlistName = event.target.name; 
        let copiedPlaylist = {...statePlaylist}
        copiedPlaylist[playlistName] = event.target.value;
        setStatePlaylist(copiedPlaylist);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        addPlaylist(statePlaylist);
    }

    return(
            <form onSubmit={handleFormSubmit}>
                <h3>Add a new playlist</h3>
                
                <input 
                    type="text" 
                    placeholder="playlist name" 
                    name="name"
                    onChange={handleChange}
                    value={statePlaylist.name} />
            
                <button type="submit">OK</button>
            </form>
    )
}

export default PlaylistForm;