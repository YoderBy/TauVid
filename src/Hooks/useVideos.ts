// useVideos.tsx

import { useEffect, useState } from "react";
import data from '../assets/Panopto_data.json';

import curated_courses from '../assets/courses.json';
import curated_videos from '../assets/videosdict.json';
import {Faculty, DisplayQuery, Course, Faculty_data, Video } from "../utils/types";

import { stringify } from "querystring";




const useVideos = (DisplayQuery : DisplayQuery) => {
  const used_indices: string[] = [];
  const jsonData: { [key: string]: Course } = curated_courses;
  
  const jsonVideo: { [key: string]: Video } = curated_videos as { [key: string]: Video };

  const Desired_ids = curated_courses['04552237']['ids'];
  const filteredVideos: Video[] = Object.values(jsonVideo).filter(
    (video: Video) => Desired_ids.includes(video.id)
  );
  return filteredVideos;
  
  // const check = (indices: string[], id: string, vid: Video) => {
  //   //checks if the ramdonly selected video already selected, and if its faculty matches the requasted faculty
  //   if (DisplayQuery.faculty) {
  //     if (vid.facultyNumber !== DisplayQuery.faculty.id &&
  //         vid.faculty !== DisplayQuery.faculty.name) {
  //       return false;
  //     }
  //   }

  //   return !indices.some(e => e === id);
  // };

  // const sampledVideos: Video[] = [];
  // const maxSampleSize = 50;
  // let totalItemsProcessed = 0;
  // let serachCounter = 0;
  
  // while (totalItemsProcessed < maxSampleSize && serachCounter < 80000) {
  //   // this is a workaround, until I get a proper Backend for fetching JSON 
  //   serachCounter++;
  //   const randomIndex = Math.floor(Math.random() * data.length);
    
  //   const h = 416;// w and h are for the kitten placeholder
  //   const w = Math.floor(Math.random() * 1000 + 500);
    
  //   const vid : Video = data[randomIndex];

  //   if (check(used_indices, vid.id, vid)) {
  //     console.log("Video number " + totalItemsProcessed + " currently serached " + serachCounter);
  //     vid.thumbnailUrl =
  //       (vid.thumbnailUrl === "file:///C:/Panopto/Images/no_thumbnail.svg") ? `http://placekitten.com/${w}/${h}` : vid.thumbnailUrl;
  //     used_indices.push(vid.id);
  //     totalItemsProcessed++;

  //     sampledVideos.push({
  //       date: vid.date,
  //       lecturer: vid.lecturer,
  //       thumbnailUrl: vid.thumbnailUrl,
  //       duration: vid.duration,
  //       courseNumber: vid.courseNumber,
  //       fullDescription: vid.fullDescription,
  //       title: vid.title,
  //       detailUrl: vid.detailUrl,
  //       detailTitle: vid.detailTitle,
  //       folderName: vid.folderName,
  //       id: vid.id,
  //       number: vid.number,
  //       name: vid.name,
  //       faculty: vid.faculty,
  //       facultyNumber: vid.facultyNumber,
  //     });
  //   }
  // }
  
  // return sampledVideos;
};

export default useVideos;
