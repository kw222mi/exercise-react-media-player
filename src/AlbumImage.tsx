import "./AlbumImage.css"

interface IAlbumImageProps {
  src:string
}

const AlbumImage = (props:IAlbumImageProps) => {
    return ( 
          <div className="image-container">
            <img className="player-image" src={props.src} />
        </div>
     );
}
 
export default AlbumImage;