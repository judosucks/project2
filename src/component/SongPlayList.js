import { useDispatch,useSelector } from "react-redux"
import { createRandomSong,randomSong } from "../fake-data";
import { addSong , removeSong} from "../store"
import Button from "./Button"
function SongPlayList() {
    const dispatch = useDispatch()
    const songPlaylist = useSelector((state)=>{
        console.log('state useselector',state)
        return state.songs
    })
    
    const handleSongAdd = (song) => {
      const action = addSong(song)
      dispatch(action)
      console.log(action,'ibeenpressed where is dispatch')
    }
    
    const handleSongRemove = (song) => {
        dispatch(removeSong(song))
    }
    const renderedSongs = songPlaylist.map((song) => {
        return (
          <li key={song}>
            {song}
            <Button
              onClick={() => handleSongRemove(song)}
              primary rounded
            >
              X
            </Button>
          </li>
        );
      });
    
      return (
        <div className="container">
          <div className="">
            <h3 className="">Song Playlist</h3>
            <div className="">
              <Button
                onClick={() => handleSongAdd(randomSong())}
                secondary rounded
              >
                + Add Song to Playlist
              </Button>
            </div>
          </div>
          <ul>{renderedSongs}</ul>
        </div>
      );
    
    
    
    
}
export default SongPlayList