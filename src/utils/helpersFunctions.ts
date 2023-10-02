import { Course, Video } from "./types";

export  function isVideo (Object : Course[] | Video[]) : Object is Video[]{
  return Object.length > 0 && 'thumbnailUrl' in Object[0];
}
export const timeToSeconds = (time : string) => {
    if (!time) return 0;
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return (hours * 3600) + (minutes * 60) + seconds;
};