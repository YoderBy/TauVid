// GameGrid.tsx

import { useEffect, useState } from 'react';
import useVideos, { Video } from '../Hooks/useVideos';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

interface Props {
  refreshing: boolean;
}

const GameGrid: React.FC<Props> = ({ refreshing }) => {
        const videos = useVideos({ refreshing});
        
return (
    <>
      <SimpleGrid
        dir="rtl"
        padding={'10px'}
        columns={{ sm: 2, md: 4, lg: 5, xl: 8 }}
        spacing={10}
      >
        {videos.map((vid) => (
          <GameCard key={vid.id} video={vid} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
