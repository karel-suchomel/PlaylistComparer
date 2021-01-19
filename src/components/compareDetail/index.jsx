import React from 'react';
import {useQuery} from 'react-apollo';
import {GET_PLAYLISTS, GET_SAME_TRACKS} from '../../queries';

import SongList from '../songList';
import Loader from '../loader';


const CompareDetail = ({playlists}) => {
    const {loading: playlistLoading, error: playlistError, data: playlistData} = useQuery(GET_PLAYLISTS, {
        variables: playlists.ids
    });

    const {loading: tracksLoading, error: tracksError, data: tracksData} = useQuery(GET_SAME_TRACKS, {
        variables: playlists.ids
    });
    
    if(playlistError){
        return `Error! ${playlistError.message}`;
    }
    if(tracksError){
        return `Error! ${tracksError.message}`;
    }
    if (playlistLoading || tracksLoading) {
        return <Loader />
    }

    return (
        <>
        <div className="count">
            <h2>You are vibing</h2>
            <p>{Object.keys(tracksData.tracks).length}</p>
            <h2>same songs!</h2>
        </div>
        <SongList data={tracksData} />
        </>
    )
}

export default CompareDetail
