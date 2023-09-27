
import { useEffect, useState } from "react";
import data from '../assets/Panopto_data_faculties.json';

export interface Faculty {
  id: string;
  name: string;
}
// retrive falculty[] object from json
const useFaculties = () => {

  const Facultys: Faculty[] = [];
  data.forEach(ent => Facultys.push( // data already has all the faculties
    { id: ent.id, name: ent.faculty }
  )
  )

  return (Facultys)
}
export default useFaculties