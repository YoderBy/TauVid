
import { useEffect, useState } from "react";
import data from '../assets/Panopto_data_faculties.json';

export interface Faculty {
id: string;
name: string;
}

const useFaculties = ()=>{
    // useVideos.tsx
  const [isLoading, setLoading] = useState(false);
  const [Faculty, setFaculty] = useState<Faculty[]>([]);

  useEffect(() => {
    const Facultys: Faculty[] = [];
    data.forEach(ent=> Facultys.push(
        {id:ent.id, name: ent.faculty}
        )
    )
    setFaculty(Facultys);
    
  }, []); // Refresh the videos when the 'refreshing' prop changes

  return (Faculty)
}
export default useFaculties