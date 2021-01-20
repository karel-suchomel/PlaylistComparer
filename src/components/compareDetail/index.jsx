import React from 'react';
import {useQuery} from 'react-apollo';
import {GET_PLAYLISTS, GET_SAME_TRACKS} from '../../queries';

import Loader from '../loader';
import SongList from '../songList';
import PlaylistDetail from '../playlistDetail';
import _ from 'lodash';


const CompareDetail = ({playlists}) => {

    const {loading: playlistLoading, error: playlistError, data: playlistData} = useQuery(GET_PLAYLISTS, {
        variables: playlists.ids,
        skip: _.isEmpty(playlists)
    });

    const {loading: tracksLoading, error: tracksError, data: tracksData} = useQuery(GET_SAME_TRACKS, {
        variables: playlists.ids,
        skip: _.isEmpty(playlists)
    });

    if(playlistError){
        return `Error! ${playlistError.message}`;
    }
    if(tracksError){
        return `Error! ${tracksError.message}`;
    }
    if (playlistLoading || tracksLoading || !playlistData || !tracksData) {
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
        <PlaylistDetail data={playlistData} />
        </>
    )
}

export default CompareDetail
