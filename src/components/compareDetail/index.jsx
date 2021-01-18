import React from 'react';
import SongList from '../songList';
import _ from 'lodash';

const CompareDetail = ({playlists}) => {
    let count = {};
    if (!_.isEmpty(playlists)) {
        count = Object.keys(playlists.tracks).length;
    }
    return (
        <>
        <div className="count">
            <h2>You are vibing</h2>
            <p>{count?count:"000"}</p>
            <h2>same songs!</h2>
        </div>
        <SongList data={playlists} />
        </>
    )
}

export default CompareDetail
