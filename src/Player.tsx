import "./Player.css"

const Player = () => {
    return ( 
        <div className="player-container">
            <span className="material-icons">
                repeat
            </span>
        <span className="material-icons">
                skip_previous
        </span>
        <span className="material-icons">
            play_circle
        </span>
        <span className="material-icons">
            skip_next
        </span>
        <span className="material-icons">
            shuffle
        </span>
        </div>
     );
}
 
export default Player;