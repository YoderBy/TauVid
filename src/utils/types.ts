//types.ts

export interface DisplayQuery {
    sortBy?: string;
    previous?: {id: string, type: "faculty" | "course" },
    id: string; // id for the object
    type: "faculty" | "course"; // type of the passed object
    faculty: Faculty | null;
    searchQuery : string;
}


export interface Faculty {
    id: string;
    name: string;
  }

export interface JsonFaculty {
    id: string;
    name: string;
    amount: number;
    ids: number[];
    lecturer: string[];
  }
export interface Faculty_data{
    id:number,   
    amount: number,
    name: string[],
    ids_of_courses: number[],
    lecturer: string[],

}
export interface Video {
    thumbnailUrl: string;
    duration: string;
    courseNumber?: string;
    fullDescription: string;
    title: string;
    detailUrl: string;
    detailTitle:Record<string, unknown>; 
    folderName: string;
    id: number;
    number: string;
    date?: string;
    lecturer: string;
    name: string;
    faculty?: string;
    facultyNumber?: string;
  }
  export interface Course {

    id: number,
    number: string,
    name: string,
    ids: number[],
    lecturer: string[],
    date: string[],
    year?: number,
    faculty: string[],
}
