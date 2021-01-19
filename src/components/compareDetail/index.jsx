import React from 'react';

import SongList from '../songList';


const CompareDetail = ({playlists, tracks}) => {

    console.log(playlists);
    console.log(tracks);
    return (
        <>
        <div className="count">
            <h2>You are vibing</h2>
            <p>{Object.keys(tracks.tracks).length}</p>
            <h2>same songs!</h2>
        </div>
        <SongList data={tracks} />
        </>
    )
}

export default CompareDetail
