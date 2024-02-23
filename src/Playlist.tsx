
import PlaylistItem from "./PlaylistItem";
import "./playlist.css"
import {IplayListInfo} from "./App"

  interface IplayListProps {
    playListInfo:IplayListInfo[]
    handleClick:(id:number)=> void
}


const Playlist= (props:IplayListProps) => {
      



    return (
        <div className="playlist-container">
            {props.playListInfo.map((info) => (
                <PlaylistItem
                    listId={info.id} // Use a different name for the id
                    key={info.id} // Keep the key for React's internal use
                    handleClick={props.handleClick}
                    artist={info.artist}
                    title={info.title}
                    src={info.src}
                />
            ))}
        </div>
    );
}
 
export default Playlist;




            