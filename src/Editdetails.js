import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { formValidationSchema } from "./AddMovie";
import { API_URL } from "./global-constants";

export function Editdetails() {
  const { id } = useParams();
  // const movie = movielist[id];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  return movie ? <UpdateMovie movie={movie} /> : "";
}

function UpdateMovie({ movie }) {
  const history = useHistory();
  // const [moviename, setMoviename] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [summary, setSummary] = useState(movie.summary);
  // const [rating, setRating] = useState(movie.rating);
  // const [trailer, setTrailer] = useState(movie.trailer);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        trailer: movie.trailer,
        summary: movie.summary,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updatedmovie) => {
        console.log("onsubmit", updatedmovie);
        editMovie(updatedmovie);
      },
    });

  const editMovie = (updatedmovie) => {
    // const updatedmovie = {
    //   name: moviename,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
    // const copyMovieList = [...movielist];
    // copyMovieList[id] = updatedmovie;
    // setMovielist(copyMovieList);
    // history.push("/movies");

    fetch(`${API_URL}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedmovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
  };

  return (
    <form onSubmit={handleSubmit} className="add_movie-container">
      <div className="movie-details">
        <TextField
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Enter Movie Name"
          error={errors.name && touched.name}
          helperText={errors.name && touched.name && errors.name}
          variant="standard"
        />
        <TextField
          id="poster"
          name="poster"
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Poster Link"
          error={errors.poster && touched.poster}
          helperText={errors.poster && touched.poster && errors.poster}
          variant="standard"
        />
        <TextField
          id="summary"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Enter Movie Summary"
          error={errors.summary && touched.summary}
          helperText={errors.summary && touched.summary && errors.summary}
          variant="standard"
        />
        <TextField
          id="rating"
          name="rating"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Rating"
          error={errors.rating && touched.rating}
          helperText={errors.rating && touched.rating && errors.rating}
          variant="standard"
        />
        <TextField
          id="trailer"
          name="trailer"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Trailer"
          error={errors.trailer && touched.trailer}
          helperText={errors.trailer && touched.trailer && errors.trailer}
          variant="standard"
        />
        <Button type="submit" color="success" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
}
