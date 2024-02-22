import MediaPlayer from "./MediaPlayer";
import Playlist from "./Playlist";


export function App() {
  return (
    <>
      <div className="playlist-and-player">
     <Playlist />
     <MediaPlayer />
     </div>
    </>
  );
}
