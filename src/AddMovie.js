import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie({ setMovielist, movielist }) {
  const history = useHistory();
  const [moviename, setMoviename] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMovie = () => {
    const movie = {
      name: moviename,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    setMovielist([...movielist, movie]);
    history.push("/movies");
  };
  return (
    <div className="add_movie-container">
      <div className="movie-details">
        <TextField
          value={moviename}
          onChange={(mname) => setMoviename(mname.target.value)}
          label="Enter Movie Name"
          variant="standard"
        />
        <TextField
          value={poster}
          onChange={(mposter) => setPoster(mposter.target.value)}
          label="Poster Link"
          variant="standard"
        />
        <TextField
          value={summary}
          onChange={(msummary) => setSummary(msummary.target.value)}
          label="Enter Movie Summary"
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
        <Button onClick={addMovie} variant="contained">
          Add Movie
        </Button>
      </div>
    </div>
  );
}
