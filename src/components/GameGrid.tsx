
import { useEffect, useState } from 'react';
import useVideos from '../Hooks/useVideos';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
    const GameGrid = () => {
        const {videos} = useVideos();
    return (
    <>
    <SimpleGrid columns={3} spacing = {10}>
        {videos.map(vid => <GameCard  key = {vid.id} video={vid}/>)}
    </SimpleGrid>
    </>
)}

export default GameGrid;