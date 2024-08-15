import SongPlayList from "../component/SongPlayList";
import MoviePlayList from "../component/MoviePlayList";
import Button from "../component/Button";
import { useDispatch } from "react-redux";
import { reset } from "../store";
function PlayMovieSongPage(){
    const dispatch = useDispatch()//this is a must
    const handleResetClick = () => {
        dispatch(reset())//dispatch it to reset
      };
    
      return (
        <div className="container">
          <Button onClick={() => handleResetClick()} rounded danger>
            Reset Both Playlists
          </Button>
          <hr />
          <MoviePlayList/>
          <hr />
          <SongPlayList/>
        </div>
      );  

}

export default PlayMovieSongPage