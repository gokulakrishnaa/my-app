import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Editdetails({ setMovielist, movielist }) {
  const history = useHistory();
  const { id } = useParams();
  const movie = movielist[id];
  const [moviename, setMoviename] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);
  const editMovie = () => {
    const updatedmovie = {
      name: moviename,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    const copyMovieList = [...movielist];
    copyMovieList[id] = updatedmovie;
    setMovielist(copyMovieList);
    history.push("/movies");
  };

  return (
    <div className="add_movie-container">
      <div className="movie-details">
        <TextField
          value={moviename}
          onChange={(mname) => setMoviename(mname.target.value)}
          label="Name"
          variant="standard"
        />
        <TextField
          value={poster}
          onChange={(mposter) => setPoster(mposter.target.value)}
          label="Poster"
          variant="standard"
        />
        <TextField
          value={summary}
          onChange={(msummary) => setSummary(msummary.target.value)}
          label="Summary"
          variant="standard"
        />
        <TextField
          value={rating}
          onChange={(mrating) => setRating(mrating.target.value)}
          label="Rating"
          variant="standard"
        />
        <TextField
          value={trailer}
          onChange={(mtrailer) => setTrailer(mtrailer.target.value)}
          label="Trailer"
          variant="standard"
        />
        <Button onClick={editMovie} variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
}
