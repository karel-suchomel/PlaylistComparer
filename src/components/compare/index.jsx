import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './compare.css';
import history from '../../history';

const Compare = () => {
    const [redirect, setRedirect] = useState(false);
    const [playlistIDs, setPlaylistIDS] = useState({});
    const {handleSubmit, register, errors} = useForm();

    // 38w5V8Ke2vsoSCBoTQUblP
    // 5KYJqvahaLoffrR9ZuDdVQ

    useEffect(() => {        
        return () => {
            setRedirect(false);
        }
    }, [])

    const onSubmit = (ids) => {
        // setPlaylistIDS(params);
        // setRedirect(true);
        history.push({
            pathname: '/compare',
            state: {ids}
        });
    }

    // if (redirect) {
    //     return <Redirect to={{
    //         pathname: '/compare',
    //         state: playlistIDs
    //     }} />
    // }

    return (
        <div id="compare" className="wrapper">
            
            <h2>Link the playlists you want to compare.</h2>
            <div className="playlistInputs">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="id1" className="textInput" ref={register({required:true})} placeholder="Playlist link" />
                    {errors.id1 && <span>This field is required</span>}
                    <input name="id2" className="textInput" ref={register({required:true})} placeholder="Playlist link" />                    
                    {errors.id2 && <span>This field is required</span>}
                    <button type="submit" className="cta">COMPARE</button>                    
                </form>
            </div>
        </div>
    )
}

export default Compare
