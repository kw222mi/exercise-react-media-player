import AlbumImage from "./AlbumImage";
import MediaPlayerTopBar from "./MediaPlayerTopBar";
import Player from "./Player";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import "./MediaPlayer.css"

  interface IMediaPlayerProps {
        src: string;
        artist: string;
        title: string;
        id?: number;
    }

const MediaPlayer = (props:IMediaPlayerProps) => {
  
    return ( 
        <div className="mediaplayer-container">
            <MediaPlayerTopBar />
            <AlbumImage src={props.src}/>
            <SongInfo artist={props.artist} title={props.title}/>  
            <ProgressBar />
            <Player />

        </div>
     );
}
 
export default MediaPlayer;