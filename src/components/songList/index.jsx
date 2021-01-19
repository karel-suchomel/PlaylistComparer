import React, {useState, useEffect} from 'react';
import './songList.css';

const SongList = ({data}) => {
    const [isMobile, setMobile] = useState(window.innerWidth<500);
    let counter = 0;

    const updateMedia = () => {
        setMobile(window.innerWidth<500);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);  
    })
    

    if (isMobile) {
        return(
            <div className="mobileList">
                {data.tracks.map(track => {
                    return <div key={track.name} className="listRow">
                        <img src={track.album.images[0].url} alt={track.name}/>
                        <a href={track.href}>{track.name}</a>
                        <p>{track.artists[0].name}</p>
                    </div>
                })}
            </div>
        )
    }
    

    return (
        <div className="list">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>name</th>
                        <th>artist</th>
                        <th>album</th>
                    </tr>
                </thead>
                <tbody>
                    {data.tracks.map(track => {
                        counter++;
                        return <tr key={track.name}>
                            <td>{counter}</td>
                            <td><h2><a href={track.href}>{track.name}</a></h2></td>
                            <td><h2>{track.artists[0].name}</h2></td>
                            <td><h2>{track.album.name}</h2></td>
                        </tr>
                    })}
                </tbody>
                
            </table>
        </div>
    )
}

export default SongList
