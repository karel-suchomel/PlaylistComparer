import React, {useState} from 'react'
import _ from 'lodash';
import CompareDetail from '../components/compareDetail';
import {useForm} from 'react-hook-form';
import history from '../history';

const ComparePage = ({location, history}) => {
    const [playlistIDs, setPlaylistIDS] = useState({ids: history.location.state});
    const {handleSubmit, register, errors} = useForm();

    const onSubmit = (params) => { 
        history.push({
            pathname:'/compare',
            state: {ids: params}
        })
    };

    if (_.isEmpty(history.location.state)) {
        
        return (
            <section id="comparison">
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
            </section>
        )
    }else{
        return (
            <section id="comparison">
                <h1>Here are your results...</h1>            
                <CompareDetail playlists={history.location.state}/>
            </section>
        )
    }    
}

export default ComparePage
