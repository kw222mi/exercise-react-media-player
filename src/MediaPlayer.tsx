import AlbumImage from "./AlbumImage";
import MediaPlayerTopBar from "./MediaPlayerTopBar";
import Player from "./Player";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import "./MediaPlayer.css"


const MediaPlayer = () => {
    return ( 


        <div className="mediaplayer-container">
            <MediaPlayerTopBar />
            <AlbumImage src="./src/assets/img-1.jpg"/>
            <SongInfo artist="Ashton Allen" title="Worshipful CHAOS"/>  
            <ProgressBar />
            <Player />

        </div>
     );
}
 
export default MediaPlayer;