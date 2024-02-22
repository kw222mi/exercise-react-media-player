import "./mediaPlayerTopBar.css"

const MediaPlayerTopBar = () => {
    return ( 
        <div className="top-container">
                <span className="material-icons">
                    arrow_back_ios
                </span>
                <p className="top-text">Playlist - Study</p>
                <span className="material-icons">
                    more_vert
                </span>
            </div>
     );
}
 
export default MediaPlayerTopBar;