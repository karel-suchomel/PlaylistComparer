import React from 'react'
import './loader.css'

const Loader = () => {
    return (
        <div className="loader">

            <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}} width="150px" height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#03dac5" strokeWidth="8" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.8695652173913042s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
            </svg>
        </div>
    )
}

export default Loader
