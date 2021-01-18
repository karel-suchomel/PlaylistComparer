import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './compare.css';

const Compare = () => {
    const [redirect, setRedirect] = useState(false);
    const {handleSubmit,watch, register, errors} = useForm();
    const playlist1 = watch('playlist1', null);
    const playlist2 = watch('playlist2', null);

    // 38w5V8Ke2vsoSCBoTQUblP
    // 5KYJqvahaLoffrR9ZuDdVQ


    const onSubmit = params => {
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={{
            pathname: '/compare',
            state: {playlist1: playlist1, playlist2: playlist2}
        }} />
    }

    return (
        <div id="compare" className="wrapper">
            
            <h2>Link the playlists you want to compare.</h2>
            <div className="playlistInputs">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="playlist1" className="textInput" ref={register({required:true})} placeholder="Playlist link" />
                    {errors.playlist1 && <span>This field is required</span>}
                    <input name="playlist2" className="textInput" ref={register({required:true})} placeholder="Playlist link" />                    
                    {errors.playlist2 && <span>This field is required</span>}
                    {/* <Link to={{pathname: '/compare', state: {playlist1: playlist1, playlist2: playlist2}}}  >COMPARE</Link> */}
                    <button type="submit" className="cta">COMPARE</button>                    
                </form>
            </div>
        </div>
    )
}

export default Compare
