import { useState } from "react";
import MediaPlayer from "./MediaPlayer";
import Playlist from "./Playlist";

 export interface IplayListInfo {
    src: string;
    artist: string;
    title: string;
    id: number;
}

export function App() {


  const playListInfo: IplayListInfo[] =[
    {
        src: "src/assets/img-6.jpg",
        artist: "Arnold Palmer",
        title: "Coffee Limit",
        id: 1
    },
    {
        src: "src/assets/img-7.jpg",
        artist: "Darryl Raine",
        title: "Rapturous Dreamscape",
        id: 2
    },
    {
        src: "src/assets/img-1.jpg",
        artist: "Silver",
        title: "I Still Believe In you",
        id: 3
    },
    {
        src: "src/assets/img-2.jpg",
        artist: "Bradley Nelson",
        title: "Energetic Silence",
        id: 4
    },
    {
        src: "src/assets/img-3.jpg",
        artist: "Bobby Money",
        title: "Cool nights",
        id: 5
    },
    {
        src: "src/assets/img-4.jpg",
        artist: "Jimmie Gear",
        title: "Silver love",
        id: 6
    },
    {
        src: "src/assets/img-5.jpg",
        artist: "Teddie Russell",
        title: "Private backseat kiss",
        id: 7
    },
    {
        src: "src/assets/song-image.png",
        artist: "Ashton Allen",
        title: "Worshipful CHAOS",
        id: 8
    },
]

const [song, setSong] = useState<IplayListInfo>(playListInfo[0]);

    const handleClick = (id:number): void => {
        setSong(playListInfo[id-1])
    }
  
  
  return (
    <>
      <div className="playlist-and-player">
     <Playlist playListInfo={playListInfo} handleClick= {handleClick}/>
     <MediaPlayer src={song.src} artist={song.artist} title={song.title}/>
     </div>
    </>
  );
}
