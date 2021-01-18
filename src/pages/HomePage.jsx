import React from 'react';
import Compare from '../components/compare';
import FlatButton from '../components/button';
import { Link } from 'react-scroll';

import './pages.css';
 
const Homepage = () => {
    return (
        <section id="homepage">
            <div className="highlight">
                <h1>Compare your playlists!</h1>
                <p>find matching tunes and create and ultimate playlist for your roads.</p>
                
                <Link className="cta" to="compare" spy={true} smooth={true} duration={500}>COMPARE</Link>
            </div>
            <Compare/> 
            <svg width="198" height="832" viewBox="0 0 198 832" fill="none" xmlns="http://www.w3.org/2000/svg" className="blob1">
            <path d="M-23.5 -45.5L52 -28.5C52 -28.5 15.5001 34 136.598 225C257.696 416 172 607 108 715C44 823 -23.5 861.5 -23.5 808C-23.5 754.5 -23.5 -45.5 -23.5 -45.5Z" fill="#03DAC5"/>
            </svg>

            {/* <svg width="610" height="621" viewBox="0 0 610 621" fill="none" xmlns="http://www.w3.org/2000/svg" className="blob2">
            <path d="M294.5 545.534L511.16 545.534C511.16 545.534 434.422 553.077 353.128 323.963C271.834 94.849 84.2139 88.4603 -49 102.5C-182.214 116.54 -94.1104 433.091 -49 460.5C-3.88956 487.909 294.5 545.534 294.5 545.534Z" fill="#03DAC5"/>
            </svg> */}

            <svg width="452" height="1533" viewBox="0 0 452 1533" fill="none" xmlns="http://www.w3.org/2000/svg" className="blob3">
            <path d="M99.1984 486C353.897 386 497.699 0 497.699 0L475.199 1183.5C475.199 1183.5 475.199 1352 475.199 1496C475.199 1640 -177.5 1328.5 47 1038C271.5 747.5 -155.5 586 99.1984 486Z" fill="#BB86FC"/>
            </svg>


            
        </section>
    )
}

export default Homepage
