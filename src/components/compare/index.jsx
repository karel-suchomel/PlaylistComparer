import React from 'react';
import { useForm } from 'react-hook-form';
import './compare.css';
import history from '../../history';

const Compare = () => {

    const {handleSubmit, register, errors} = useForm();

    // 38w5V8Ke2vsoSCBoTQUblP
    // 5KYJqvahaLoffrR9ZuDdVQ

    const onSubmit = (ids) => {
        history.push({
            pathname: '/compare',
            state: {ids}
        });
    }

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
