import React from 'react';
import './songList.css';

const SongList = ({data}) => {
    let counter = 0;
    console.log(data);
    // const renderList = () => {
    //     if (data) {
    //         data.tracks.map(track => {
    //             counter++;
    //             return <tr key={track.name}>
    //                 <td>{counter}</td>
    //                 <td>{track.name}</td>
    //                 <td>{track.artists[0].name}</td>
    //                 <td>{track.album.name}</td>
    //             </tr>
    //         })
    //     }else{
    //         return <div>Loading...</div>
    //     }
    // }

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
                    <td>{track.name}</td>
                    <td>{track.artists[0].name}</td>
                    <td>{track.album.name}</td>
                </tr>
            })}
                </tbody>
                
            </table>
        </div>
    )
}

export default SongList
