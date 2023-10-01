// GameGrid.tsx

import useVideos from '../Hooks/useVideos';
import { DisplayQuery, Video } from '../utils/types';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
interface Props {
  DisplayQuery: DisplayQuery;
}

const GameGrid: React.FC<Props> = ({DisplayQuery }) => {

  const sampledVideo = useVideos(DisplayQuery) 
  // get objects and renders them inside the grid
  // the things to renders depends on the app componenet

return (
    <>
      <SimpleGrid
        dir="rtl"
        padding={'5px'}
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        spacing={7}
      >
        {sampledVideo.map((vid: Video) => (
          <GameCard key={vid.id} video={vid} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
