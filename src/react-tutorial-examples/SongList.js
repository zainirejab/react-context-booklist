//Examples of SongList and NewSongForm

import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import NewSongForm from './NewFormSong';

const SongList = () => {
    const [songs, setSongs] = useState([
        {id: 1, title:"Crazy"},
        {id: 2, title:"Animal Nitrate"},
        {id: 3, title:"Lazy"}
    ]);

    const addSong = (title) => {
        setSongs([...songs, { id: uuidv4(), title: title }]) // can also use only title
    }

    return ( 
        <div className="song-list">
            <ul>
                {songs.map((song) => {return ( <li key={song.id}>{song.title}</li> )})}  
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList;

// songs.map