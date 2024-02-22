import "./playlistItem.css"

   interface IPlaylistItemProps {
        src: string,
        artist: string,
        title: string
    }


const PlaylistItem = (props: IPlaylistItemProps) => {
 
    return ( 

        <div className="song-card">
                <img className="list-image" src={props.src}/>
                <div className="list-text-container">
                    <span className="list-text">{props.artist}</span>
                    <span className="list-text">{props.title}</span>
                </div>
                <span className="material-icons">
                    play_circle
                </span>
            </div>     

    );
}
 
export default PlaylistItem;