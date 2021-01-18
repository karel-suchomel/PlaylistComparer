import React from 'react'
import {useLocation} from 'react-router-dom';
import {useQuery} from 'react-apollo';
import {GET_PLAYLISTS, GET_SAME_TRACKS} from '../queries';
import CompareDetail from '../components/compareDetail';
import Loader from '../components/loader';
import _ from 'lodash';

const Compare = () => {
    let location = useLocation();
    let data = {};

    const {loading: playlistLoading, error: playlistError, data: playlistData} = useQuery(GET_PLAYLISTS, {
        variables: {id1: location.state.playlist1, id2: location.state.playlist2}
    });

    const {loading: tracksLoading, error: tracksError, data: tracksData} = useQuery(GET_SAME_TRACKS, {
        variables: {id1: location.state.playlist1, id2: location.state.playlist2}
    });

    if(playlistError){
        return `Error! ${playlistError.message}`;
    }
    if(tracksError){
        return `Error! ${tracksError.message}`;
    }

    if (!_.isEmpty(playlistData) && !_.isEmpty(tracksData)) {
        data = {playlists: playlistData.playlists, tracks: tracksData.tracks};
    }

    if (playlistLoading || tracksLoading) {
        return <Loader />
    }
    
    return (
        <section id="comparison">
            <h1>Here are your results...</h1>            
            <CompareDetail playlists={data} />
        </section>
    )
}

export default Compare
