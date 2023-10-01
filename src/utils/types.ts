export interface Course {
    id: number,
    name: string,
    ids: number[],
    lecturer: string[],
    date: string[],
    faculty: string[],
}

export interface DisplayQuery {
    faculty: Faculty | null;
    refreshing : boolean;
  
}

export interface Faculty {
    id: string;
    name: string;
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
    fullDescription?: string;
    title: string;
    detailUrl: string;
    detailTitle:Record<string, unknown>; 
    folderName: string;
    id: number;
    number: string;
    date?: string;
    lecturer?: string;
    name: string;
    faculty?: string;
    facultyNumber?: string;
  }