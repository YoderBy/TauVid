// GameGrid.tsx

import useVideos, {Video} from '../Hooks/useVideos';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
interface Props {
  refreshing: boolean;
}

const GameGrid: React.FC<Props> = ({ refreshing }) => {
        const {videos, isLoading} = useVideos({ refreshing});
        const Skeletons = [1,2,3,4,5,6];

return (
    <>
      <SimpleGrid
        dir="rtl"
        padding={'5px'}
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        spacing={3}
      >
        {videos.map((vid:Video) => (
          <GameCard key={vid.id} video={vid} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;