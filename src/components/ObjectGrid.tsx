
import useFetchObjects from '../Hooks/useFetchObjects';
import { Course, DisplayQuery, Video } from '../utils/types';
import { SimpleGrid } from '@chakra-ui/react';
import VideoCard from './VideoCard';
import CourseCard from './CourseCard';
interface Props {
  DisplayQuery: DisplayQuery;
  onClick: (course: Course) => void;
}

const ObjectGrid: React.FC<Props> = ({ DisplayQuery, onClick }) => {
  let ObjectToRender = useFetchObjects(DisplayQuery)



  function isVideo (Object : Course[] | Video[]) : Object is Video[]{
    return Object.length > 0 && 'thumbnailUrl' in Object[0];
  }
  if(!isVideo(ObjectToRender)){
  ObjectToRender = ObjectToRender.sort((Object1 : Course, Object2 : Course) => Object2.ids.length - Object1.ids.length)
  }
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
        {DisplayQuery.type == 'faculty' ? // there is probebly a better way to render it
          ObjectToRender.map(course =>
            <CourseCard key = {course.id} Course={course as Course} onClick={onClick} />
          ) :
          ObjectToRender.map(video =>
            <VideoCard key = {video.id} video={video as Video} />
          )
        }
      </SimpleGrid>
    </>
  );
};

export default ObjectGrid;
