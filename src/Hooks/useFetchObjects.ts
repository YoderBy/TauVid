// useFetchObjects.tsx

import { useEffect, useState } from "react";
import data from '../assets/Panopto_data.json';
import curated_faculties from '../assets/faculties.json';
import curated_courses from '../assets/courses.json';
import curated_videos from '../assets/videosdict.json';
import {Faculty, DisplayQuery, Course, Faculty_data, Video, JsonFaculty } from "../utils/types";

import { stringify } from "querystring";
export const JsonFaculties : { [key: string]: JsonFaculty } = curated_faculties as { [key: string]: JsonFaculty };
export const JsonCourses : { [key: string]: Course } = curated_courses as { [key: string]: Course };
export const JsonVideos : { [key: string]: Video } = curated_videos as { [key: string]: Video };
  


//this hook fetch the required objects, based on the request
const useFetchObjects = (DisplayQuery : DisplayQuery) => {
  
   let FilteredObject : Course[] | Video[] = [];

  if (DisplayQuery.type == "faculty"){ // returns all the courses in that faculty
    const DesiredIds = JsonFaculties[DisplayQuery.id]['ids'];
    FilteredObject = Object.values(JsonCourses).filter(
      (Course: Course) => DesiredIds.includes(Course.id)
    )
  }

  if (DisplayQuery.type == "course"){ // returns all the videos in that course
    const DesiredIds = JsonCourses[DisplayQuery.id]['ids'];
    FilteredObject = Object.values(JsonVideos).filter(
      (video: Video) => DesiredIds.includes(video.id)
    );
  }
  
  return FilteredObject;
  
};

export default useFetchObjects;

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