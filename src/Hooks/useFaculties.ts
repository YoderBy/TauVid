
import { useEffect, useState } from "react";
import data from '../assets/Panopto_data_faculties.json';

export interface Genre {
id: number;
name: string;
}

const useFaculties = ()=>{
    // useVideos.tsx
    const [isLoading, setLoading] = useState(false);
  const [genre, setGenre] = useState<Genre[]>([]);
  const check = (indices: string[], id: string) => {
    indices.forEach((e) => {
      if (e === id) {
        return false;
      }
    });
    return true;
  };

  useEffect(() => {
    const Genres: Genre[] = [];
    data.forEach(ent=> Genres.push(
        {id:parseInt(ent.id), name: ent.faculty}
        )
    )
    setGenre(Genres);
    
  }, []); // Refresh the videos when the 'refreshing' prop changes

  return {genre};
}
export default useFaculties