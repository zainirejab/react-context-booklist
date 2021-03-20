//Examples of NewSongForm and SongList
 
import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Song name:</label>
            <input type="text" required value={title} onChange={(e) => {return setTitle(e.target.value)}}/>
            <input type="submit" value="Add song"/>
        </form>
    );
}
 
export default NewSongForm;