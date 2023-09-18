
import { useEffect, useState } from "react";
import data from '../assets/Panopto_data_faculties.json';

export interface Faculty {
id: number;
name: string;
}

const useFaculties = ()=>{
    // useVideos.tsx
    const [isLoading, setLoading] = useState(false);
  const [Faculty, setFaculty] = useState<Faculty[]>([]);
  const check = (indices: string[], id: string) => {
    indices.forEach((e) => {
      if (e === id) {
        return false;
      }
    });
    return true;
  };

  useEffect(() => {
    const Facultys: Faculty[] = [];
    data.forEach(ent=> Facultys.push(
        {id:parseInt(ent.id), name: ent.faculty}
        )
    )
    setFaculty(Facultys);
    
  }, []); // Refresh the videos when the 'refreshing' prop changes

  return (Faculty)
}
export default useFaculties