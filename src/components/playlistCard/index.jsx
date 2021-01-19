import React from 'react'
import './playlistCard.css';

const convertMs = duration => {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    minutes = (minutes < 10) ? '0'+minutes:minutes;
    return hours+"h"+minutes+"m";
}

const PlaylistCard = ({playlist}) => {
    return (
        <div className="card">
            <div className="header">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <div className="info">
                    <a href={playlist.href} className="playlistName">{playlist.name}</a>
                    <p className="owner">by {playlist.owner.displayName}</p>
                    <p className="description">{playlist.description === "" ? "No Description...":playlist.description}</p>
                </div>
            </div>
            <div className="stats">
                <div className="stat">
                    <h3>Number of songs:</h3>
                    <p>{playlist.tracks.total}</p>
                </div>
                <div className="stat">
                    <h3>Total Playtime:</h3>
                    <p>{convertMs(playlist.playTime)}</p>
                </div>
                <div className="stat">
                    <h3>Duplicates:</h3>
                    <p>{playlist.duplicates}</p>
                </div>
            </div>
        </div>
    )
}

export default PlaylistCard
