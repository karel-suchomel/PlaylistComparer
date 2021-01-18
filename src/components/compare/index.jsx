import React from 'react';
import {NavLink} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './compare.css';

const Compare = () => {
    const {watch, register} = useForm();
    const playlist1 = watch('playlist1', null);
    const playlist2 = watch('playlist2', null);

    // 38w5V8Ke2vsoSCBoTQUblP
    // 5KYJqvahaLoffrR9ZuDdVQ

    return (
        <div id="compare" className="wrapper">
            <h2>Link the playlists you want to compare.</h2>
            <div className="playlistInputs">
                <form>
                    <input name="playlist1" className="textInput" ref={register} placeholder="Playlist link" />
                    <input name="playlist2" className="textInput" ref={register} placeholder="Playlist link" />
                </form>
            </div>

            <NavLink to={{pathname: '/compare', state: {playlist1: playlist1, playlist2: playlist2}}} className="cta" type="submit">COMPARE</NavLink>            
        </div>
    )
}

export default Compare
