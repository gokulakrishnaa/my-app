import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { API_URL } from "./global-constants";

export function Movietask() {
  const [movielist, setMovielist] = useState([]);

  const getMovies = () => {
    fetch(`${API_URL}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovielist(mvs));
  };

  useEffect(getMovies, []);

  const deleteMovies = (id) => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  const history = useHistory();
  return (
    <div className="Movie-App">
      {movielist.map(({ name, rating, poster, summary, trailer, id, _id }) => (
        <Displaylist
          key={_id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          trailer={trailer}
          id={_id}
          deletebutton={
            <IconButton
              onClick={() => {
                deleteMovies(_id);
              }}
              //   const deleteindex = index;
              //   const remainingMovies = movielist.filter(
              //     (mv, idx) => idx !== deleteindex
              //   );
              //   setMovielist(remainingMovies);
              // }}
              color="error"
              aria-label="delete-movie"
            >
              <DeleteIcon />
            </IconButton>
          }
          editbutton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => {
                history.push("/movies/edit/" + _id);
              }}
              color="secondary"
              aria-label="edit-movie"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

function Displaylist({
  name,
  poster,
  rating,
  summary,
  id,
  deletebutton,
  editbutton,
}) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const styles = { color: rating > 8 ? "green" : "blue", fontWeight: "bold" };
  const summaryStyles = { display: show ? "block" : "none" };
  return (
    <Card className="display-movie">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {name}
            <IconButton
              onClick={() => {
                history.push("/movies/" + id);
              }}
              color="primary"
              aria-label="movie-info"
            >
              <InfoIcon />
            </IconButton>
            <IconButton onClick={() => setShow(!show)} aria-label="delete">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h3>
          <p className="movie-rating" style={styles}>
            ⭐ {rating}
          </p>
        </div>
        {/* <Button
        onClick={() => setShow(!show)}
        className="description"
        variant="outlined"
      >
        {show ? "Hide" : "Show"} Description
      </Button> */}

        <p className="movie-summary" style={summaryStyles}>
          Summary : {summary}
        </p>
        {/* {show ? <p className="movie-summary">Summary : {summary}</p> : ""} */}
        <CardActions>
          <Counter /> {editbutton} {deletebutton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
