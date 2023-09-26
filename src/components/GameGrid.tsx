// GameGrid.tsx

import useVideos, { Video } from '../Hooks/useVideos';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Faculty } from '../Hooks/useFaculties';
interface Props {
  refreshing: boolean;
  selectedFaculty: Faculty | null;
}

const GameGrid: React.FC<Props> = ({ refreshing, selectedFaculty }) => {
const sampledVideo = useVideos(refreshing, selectedFaculty)

console.log("Game Gride");
console.log(sampledVideo);
return (
    <>
      <SimpleGrid
        dir="rtl"
        padding={'5px'}
        columns={{ sm: 1, md: 1, lg: 4, xl: 6 }}
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
