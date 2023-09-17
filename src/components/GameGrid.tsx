
import { useEffect, useState } from 'react';
import useVideos from '../Hooks/useVideos';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
    const GameGrid = () => {
        const {videos} = useVideos();
    return (
    <>
    <SimpleGrid dir='rtl' padding = {'10px'} columns={{sm:2, md:4, lg:5, xl:12}} spacing = {10}>
        {videos.map(vid => <GameCard  key = {vid.id} video={vid}/>)}
    </SimpleGrid>
    </>
)}

export default GameGrid;