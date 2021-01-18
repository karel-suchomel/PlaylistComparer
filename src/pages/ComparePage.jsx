import React from 'react'
import {useLocation} from 'react-router-dom';
import {useQuery} from 'react-apollo';
import {GET_PLAYLISTS} from '../queries';

const Compare = () => {
    let location = useLocation();
    //console.log(location.state);
    const {loading, error, data} = useQuery(GET_PLAYLISTS, {
        variables: {id1: location.state.playlist1, id2: location.state.playlist2}
    });

    if (loading) {
        return <div>Loading...</div>
    }
    if(error){
        return `Error! ${error.message}`;
    }

    console.log(data);
    return (
        <div>
            {data.playlists.map(playlist => (
                <div key={playlist.name}>
                    {playlist.name}
                </div>
            ))}
        </div>
    )
}

export default Compare
