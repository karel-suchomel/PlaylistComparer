import React from 'react';
import Compare from '../components/compare';
import FlatButton from '../components/button';

import './pages.css';

const Homepage = () => {
    return (
        <section id="homepage">
            <div className="highlight">
                <h1>Compare your playlists!</h1>
                <p>find matching tunes and create and ultimate playlist for your roads.</p>
                <FlatButton text="compare" to="#" />
            </div>
            <Compare id="compare" />
        </section>
    )
}

export default Homepage
