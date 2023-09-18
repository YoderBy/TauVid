// useVideos.tsx

import { useEffect, useState } from "react";
import data from '../assets/Panopto_data.json';
import { Faculty } from "./useFaculties";

export interface Video {
    thumbnailUrl: string;
    duration: string;
    courseNumber?: string;
    fullDescription: string;
    title: string;
    detailUrl: string;
    detailTitle: {};
    folderName: string;
    id: string;
    number: string;
    name: string;
    faculty: string;
    facultyNumber: string;
}


const useVideos = (refreshing : boolean, SelectedFaculty: Faculty | null) => {
  
  const used_indices: string[] = [];
  const [isLoading, setLoading] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  
  const check = (indices: string[], id: string, vid:Video) => {

    if(SelectedFaculty){
    if(vid.facultyNumber != SelectedFaculty.id &&
     vid.faculty != SelectedFaculty.name){
      return false
    }}
    indices.forEach((e) => {
      if (e === id) {
        return false;
      }
    });
    console.log(SelectedFaculty);
    console.log(vid.faculty + "  " + vid.facultyNumber);
    console.log('got it');
    return true;
    

  };
  
  const sampledVideos: Video[] = [];
  useEffect(() => {
    console.log('Resampling videos in useVideos hook.');
    setLoading(true);

    const sampledVideos: Video[] = [];
    setVideos(sampledVideos);
    const maxSampleSize = 50;
    let totalItemsProcessed = 0;
    let serachCounter = 0;
    while (totalItemsProcessed < maxSampleSize && serachCounter < 100000) {
      serachCounter++;
      console.log(serachCounter);

      console.log(totalItemsProcessed);
      
      const randomIndex = Math.floor(Math.random() * data.length);
      const h = 416;
      const w = Math.floor(Math.random() * 1000 + 500);
      const vid = data[randomIndex];

      if(SelectedFaculty)
      { console.log(vid.facultyNumber + "   " + SelectedFaculty.id + "   "
        + vid.faculty + "    " + SelectedFaculty.name);
      }
      if (
        check(used_indices, vid.id, vid)) {
        vid.thumbnailUrl = (vid.thumbnailUrl=== "file:///C:/Panopto/Images/no_thumbnail.svg") ? `http://placekitten.com/${w}/${h}`: vid.thumbnailUrl;
        used_indices.push(vid.id);
        totalItemsProcessed++;
        sampledVideos.push({
          thumbnailUrl: vid.thumbnailUrl,
          duration: vid.duration,
          courseNumber: vid.courseNumber,
          fullDescription: vid.fullDescription,
          title: vid.title,
          detailUrl: vid.detailUrl,
          detailTitle: vid.detailTitle,
          folderName: vid.folderName,
          id: vid.id,
          number: vid.number,
          name: vid.name,
          faculty: vid.faculty,
          facultyNumber: vid.facultyNumber,
        });
      }
    }
    console.log(new Set(videos.map(v => v.id)).size !== sampledVideos.length);
    setVideos(sampledVideos);
    setLoading(false);
  }, [SelectedFaculty, refreshing]); 

  // Refresh the videos when the 'refreshing' prop changes
  
  console.log(videos);
  return {videos, isLoading};
};

export default useVideos;
