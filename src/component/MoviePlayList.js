import { createRandomMovie } from "../fake-data";
import { useDispatch ,useSelector } from "react-redux";
import { addMovie,removeMovie } from "../store";

import Button from "./Button";
function MoviePlayList() {
 const dispatch = useDispatch()
 
  const moviePlaylist = useSelector((state)=>{
    return state.movies
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie))
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie))
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie} className="m-2">
        {movie}
        <Button
          onClick={() => handleMovieRemove(movie)}secondary
          rounded className=""
        >
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="container">
      <div className="">
        <h3 className="">Movie Playlist</h3>
        <div className="">
          <Button
            onClick={() => handleMovieAdd(createRandomMovie())}
            rounded primary>
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlayList;
