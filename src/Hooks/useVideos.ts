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


const useVideos = (refreshing: boolean, SelectedFaculty: Faculty | null) => {
  const used_indices: string[] = [];

  const check = (indices: string[], id: string, vid: Video) => {
    //checks if the ramdonly selected video already selected, and if its faculty matches the requasted faculty
    if (SelectedFaculty) {
      if (vid.facultyNumber !== SelectedFaculty.id &&
          vid.faculty !== SelectedFaculty.name) {
        return false;
      }
    }

    return !indices.some(e => e === id);
  };

  const sampledVideos: Video[] = [];
  const maxSampleSize = 50;
  let totalItemsProcessed = 0;
  let serachCounter = 0;
  
  while (totalItemsProcessed < maxSampleSize && serachCounter < 10000) {
    // this is a workaround, until I get a proper Backend for fetching JSON 
    serachCounter++;
    const randomIndex = Math.floor(Math.random() * data.length);
    
    const h = 416;// w and h are for the kitten placeholder
    const w = Math.floor(Math.random() * 1000 + 500);
    
    const vid = data[randomIndex];

    if (check(used_indices, vid.id, vid)) {
      console.log("Video number " + totalItemsProcessed + " currently serached " + serachCounter);
      vid.thumbnailUrl =
        (vid.thumbnailUrl === "file:///C:/Panopto/Images/no_thumbnail.svg") ? `http://placekitten.com/${w}/${h}` : vid.thumbnailUrl;
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
  
  return sampledVideos;
};

export default useVideos;
