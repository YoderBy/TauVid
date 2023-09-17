import { useEffect, useState } from "react";
import data from '../assets/Panopto_data.json';

export interface Video {
    thumbnailUrl: string;
    duration: string;
    courseNumber: string;
    fullDescription: string;
    title: string;
    detailUrl: string;
    detailTitle: {};
    folderName: string;
    id: number;
    number: string;
    name: string;
    faculty: string;
    facultyNumber: string;
  }

const useVideos = () =>{
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
    const mappedVideos: Video[] = data.map((vid: any) => ({
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
    }));
  setVideos(mappedVideos);
}, []);
return(
    {videos}
)

}
export default useVideos;