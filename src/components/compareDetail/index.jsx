import React from 'react';
import SongList from '../songList';

const CompareDetail = ({playlists}) => {
    console.log(playlists);
    return (
        <div className="count">
            <h2>You are vibing</h2>
            <p>{Object.keys(playlists.tracks).length}</p>
            <h2>same songs!</h2>
        </div>
    )
}

export default CompareDetail
