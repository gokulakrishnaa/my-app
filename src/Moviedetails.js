import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";

export function Moviedetails({ movielist }) {
  const history = useHistory();
  const { id } = useParams();
  const movie = movielist[id];
  const styles = {
    color: movie.rating > 8 ? "green" : "blue",
    fontWeight: "bold",
  };
  return (
    <div>
      <iframe
        width="1000"
        height="600"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="details-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating" style={styles}>
            ⭐ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">Summary : {movie.summary}</p>
        <Button
          onClick={() => history.goBack()}
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
