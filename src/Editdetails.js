import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Editdetails() {
  const { id } = useParams();
  // const movie = movielist[id];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://616a3fa516e7120017fa0ee6.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  return movie ? <UpdateMovie movie={movie} /> : "";
}

function UpdateMovie({ movie }) {
  const history = useHistory();
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
    // const copyMovieList = [...movielist];
    // copyMovieList[id] = updatedmovie;
    // setMovielist(copyMovieList);
    // history.push("/movies");

    fetch(`https://616a3fa516e7120017fa0ee6.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedmovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
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
