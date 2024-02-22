import "./SongInfo.css"

interface ISongInfoProps {
    artist:string,
    title:string
}

const SongInfo = (props:ISongInfoProps) => {
    return ( 
        <div className="song-info-container">
            <span className="material-icons">
                add_circle
            </span>
            <div className="song-text-container">
            <span className="song-text">{props.artist}</span>
            <span className="song-text" id="song">{props.title}</span>
            </div>
            <span className="material-icons">
                favorite
            </span>
        </div>
     );
}
 
export default SongInfo;