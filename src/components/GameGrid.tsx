// GameGrid.tsx

import useVideos, { Video } from '../Hooks/useVideos';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import { DisplayQuery } from '../App';
import GameCardSkeleton from './GameCardSkeleton';
import { Faculty } from '../Hooks/useFaculties';
interface Props {
  DisplayQuery: DisplayQuery;
}

const GameGrid: React.FC<Props> = ({DisplayQuery }) => {

  const sampledVideo = useVideos(DisplayQuery) 
  // get video[] object and render it

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
