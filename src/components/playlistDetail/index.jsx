import React from 'react'
import './playlistDetail.css'
import PlaylistCard from '../playlistCard';

const PlaylistDetail = ({data}) => {

    return (
        <div className="cards">            
            {data.playlists.map(playlist => {
                return <PlaylistCard playlist={playlist} key={playlist.name} />
            })}
        </div>
    )
}

export default PlaylistDetail
