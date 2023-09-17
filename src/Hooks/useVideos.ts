// useVideos.tsx

import { useEffect, useState } from "react";
import data from '../assets/Panopto_data.json';

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

const used_indices: string[] = [];
const useVideos = ({ refreshing }: { refreshing: boolean }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const check = (indices: string[], id: string) => {
    indices.forEach((e) => {
      if (e === id) {
        return false;
      }
    });
    return true;
  };

  useEffect(() => {
    console.log('Resampling videos in useVideos hook.');
    setVideos([]);
    const sampledVideos: Video[] = [];
    const maxSampleSize = 150;
    let totalItemsProcessed = 0;

    for (let i = 0; i < maxSampleSize; i++) {

      const randomIndex = Math.floor(Math.random() * data.length);
      const h = Math.floor(Math.random() * 1000 + 500);
      const w = Math.floor(Math.random() * 1000 + 500);
      const vid = data[randomIndex];
      used_indices.push(vid.id);
      if (sampledVideos.length < maxSampleSize && check(used_indices, vid.id)) {
        vid.thumbnailUrl = (vid.thumbnailUrl=== "file:///C:/Panopto/Images/no_thumbnail.svg") ? `http://placekitten.com/${w}/${h}`: vid.thumbnailUrl;
        
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
    console.log(new Set(sampledVideos.map(v => v.id)).size !== sampledVideos.length);
    setVideos(sampledVideos);
  }, [refreshing]); // Refresh the videos when the 'refreshing' prop changes

  return videos;
};

export default useVideos;
