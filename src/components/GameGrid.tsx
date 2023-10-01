// GameGrid.tsx

import useFetchObjects from '../Hooks/useFetchObjects';
import { Course, DisplayQuery, Video } from '../utils/types';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import CourseCard from './CourseCard';
interface Props {
  DisplayQuery: DisplayQuery;
  onClick: (course: Course) => void;
}

const GameGrid: React.FC<Props> = ({ DisplayQuery, onClick }) => {
  const ObjectToRender = useFetchObjects(DisplayQuery)
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
        {DisplayQuery.type == 'faculty' ?
          ObjectToRender.map(course =>
            <CourseCard key = {course.id} Course={course as Course} onClick={onClick} />
          ) :
          ObjectToRender.map(video =>
            <GameCard key = {video.id} video={video as Video} />
          )
        }
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
