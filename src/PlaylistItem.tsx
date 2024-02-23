import "./playlistItem.css"

   interface IPlaylistItemProps {
        src: string,
        artist: string,
        title: string,
        listId: number,
        handleClick: (id: number) => void; // Function type for onClick event
    }


const PlaylistItem: React.FC<IPlaylistItemProps> = (props) => {
    return (
        <div className="song-card" onClick={() => props.handleClick(props.listId)}>
            <img className="list-image" src={props.src} alt={`${props.artist} - ${props.title}`} />
            <div className="list-text-container">
                <span className="list-text">{props.artist}</span>
                <span className="list-text">{props.title}</span>
            </div>
            <span className="material-icons">play_circle</span>
        </div>
    );
};

 
export default PlaylistItem;