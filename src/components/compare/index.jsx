import React from 'react';
import TextInput from '../input';
import './compare.css'

const Compare = () => {
    return (
        <div className="wrapper">
            <h2>Link the playlists you want to compare.</h2>
            <div className="playlistInputs">
                <TextInput />
                <TextInput />
                <a>add more...</a>
            </div>
            <a className="cta" href="#">compare</a>
        </div>
    )
}

export default Compare
