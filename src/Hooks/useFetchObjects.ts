// useFetchObjects.tsx

import { useEffect, useState } from "react";
import data from '../assets/Panopto_data.json';
import curated_faculties from '../assets/faculties.json';
import curated_courses from '../assets/courses.json';
import curated_videos from '../assets/videosdict.json';
import { Faculty, DisplayQuery, Course, Faculty_data, Video, JsonFaculty } from "../utils/types";

import { stringify } from "querystring";
export const JsonFaculties: { [key: string]: JsonFaculty } = curated_faculties as { [key: string]: JsonFaculty };
export const JsonCourses: { [key: string]: Course } = curated_courses as { [key: string]: Course };
export const JsonVideos: { [key: string]: Video } = curated_videos as { [key: string]: Video };



//this hook fetch the required objects, based on the request
const useFetchObjects = (DisplayQuery: DisplayQuery) => {

  let FilteredObject: Course[] | Video[] = [];
  if (DisplayQuery.searchQuery == "") {
    if (DisplayQuery.type == "faculty") { // returns all the courses in that faculty
      const DesiredIds = JsonFaculties[DisplayQuery.id]['ids'];
      FilteredObject = Object.values(JsonCourses).filter(
        (Course: Course) => DesiredIds.includes(Course.id)
      )
    }

    if (DisplayQuery.type == "course") { // returns all the videos in that course
      const DesiredIds = JsonCourses[DisplayQuery.id]['ids'];
      FilteredObject = Object.values(JsonVideos).filter(
        (video: Video) => DesiredIds.includes(video.id)
      );
    }
  }
  else {
    FilteredObject = Object.values(JsonCourses).filter(
      (course: Course) =>
       (course.faculty + course.number + course.date+course.name + course.lecturer).includes(DisplayQuery.searchQuery)
    );
  }
  return FilteredObject;

};

export default useFetchObjects;
