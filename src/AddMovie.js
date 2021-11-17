// import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

export const formValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name ? 😊"),
  poster: yup
    .string()
    .required("Why not provide the poster ?? 😊")
    .min(10, "Provide the proper details"),
  rating: yup
    .number()
    .required("Why not fill this rating ?? 😊")
    .min(0, "Invalid Rating")
    .max(10, "Invalid Rating"),
  summary: yup
    .string()
    .required("Why not fill this summary ?? 😊")
    .min(20, "Need a bigger Summary"),
  trailer: yup
    .string()
    .required("Why not provide the trailer ?? 😊")
    .min(10, "Need a proper Trailer link"),
});

export function AddMovie() {
  const history = useHistory();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        trailer: "",
        summary: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (movie) => {
        console.log("onsubmit", movie);
        addMovie(movie);
      },
    });

  const addMovie = (movie) => {
    console.log(movie);

    fetch(`https://616a3fa516e7120017fa0ee6.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(movie),
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
        <Button type="submit" variant="contained">
          Add Movie
        </Button>
      </div>
    </form>
  );
}
