
import { useEffect, useState } from 'react';
import useVideos from '../Hooks/useVideos';
    const GameGrid = () => {
        const {videos} = useVideos();
    return (
    <>
    <ul>
        {videos.map(vid => <>   
        {/* <li key={vid.id}>{vid.name}</li> */}
        <li>{vid.title}</li>
        {/* <li>{vid.detailUrl}</li> */}
        </>
        )}
    </ul>
    </>
)}

export default GameGrid;