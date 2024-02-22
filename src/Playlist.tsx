import PlaylistItem from "./PlaylistItem";
import "./playlist.css"

const Playlist = () => {

    let playListInfo =[
    {
        src: "src/assets/img-6.jpg",
        artist: "Arnold Palmer",
        title: "Coffee Limit"
    },
    {
        src: "src/assets/img-7.jpg",
        artist: "Darryl Raine",
        title: "Rapturous Dreamscape"
    },
    {
        src: "src/assets/img-1.jpg",
        artist: "Silver",
        title: "I Still Believe In you"
    },
    {
        src: "src/assets/img-2.jpg",
        artist: "Bradley Nelson",
        title: "Energetic Silence"
    },
    {
        src: "src/assets/img-3.jpg",
        artist: "Bobby Money",
        title: "Cool nights"
    },
    {
        src: "src/assets/img-4.jpg",
        artist: "Jimmie Gear",
        title: "Silver love"
    },
    {
        src: "src/assets/img-5.jpg",
        artist: "Teddie Russell",
        title: "Private backseat kiss"
    },
    {
        src: "src/assets/song-image.png",
        artist: "Ashton Allen",
        title: "Worshipful CHAOS"
    },

]

    return ( 
        <div className="playlist-container">
            <PlaylistItem artist="Arnold Palmer" title="Coffee Limit" src="src/assets/img-5.jpg"/>
        </div>
     );
}
 
export default Playlist;




            