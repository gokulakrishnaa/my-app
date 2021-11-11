import "./App.css";
import { Movietask } from "./Movietask";
import { Switch, Route, Link, Redirect, useParams } from "react-router-dom";
import { AddColor } from "./AddColor";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function App() {
  // const details = [
  //   {
  //     name: "gokul",
  //     image:
  //       "https://hs-marketing.imgix.net/images/blog/steve-jobs.jpg?auto=compress&fit=scale&w=1600&dpr=1",
  //   },
  //   {
  //     name: "steve",
  //     image:
  //       "https://hs-marketing.imgix.net/images/blog/steve-jobs.jpg?auto=compress&fit=scale&w=1600&dpr=1",
  //   },
  //   {
  //     name: "elon",
  //     image:
  //       "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
  //   },
  // ];
  const movies = [
    {
      name: "Dark Knight Rises",
      poster: "https://m.media-amazon.com/images/I/51hcfZvo7FL.jpg",
      rating: "8.4",
      trailer: "https://www.youtube.com/embed/z5Humz3ONgk",
      summary:
        "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
    },
    {
      name: "Shawshank Redemption",
      poster: "https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY741_.jpg",
      rating: "9.3",
      trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
      summary:
        "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    },
    {
      name: "Nayagan",
      poster: "https://pbs.twimg.com/media/Cjxpt7aVEAAOfts.jpg",
      rating: "8.7",
      trailer: "https://www.youtube.com/embed/1S6YkmYvgi8",
      summary:
        "Velu Nayakan, who witnesses the brutal murder of his father, kills a corrupt policeman and escapes to Mumbai, only to become a gangster.",
    },
    {
      name: "Departed",
      poster: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
      rating: "8.5",
      trailer: "https://www.youtube.com/embed/iojhqm0JTW4",
      summary:
        "An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang.",
    },
    {
      name: "HeyRam",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/71corEX9jOL._RI_.jpg",
      rating: "8",
      trailer: "https://www.youtube.com/embed/GKLvKk_uXzA",
      summary:
        "This fictional Indian drama tells the story of Saketh Ram (Kamal Hassan), a disillusioned man who tries to kill Mohandas Gandhi (Naseeruddin Shah). After sectarian violence claims the life of his wife, Aparna (Rani Mukharjee), Saketh becomes a Hindu extremist, and, although Muslims are responsible for his wife's death, he begins to blame Gandhi and his tolerant approach to religious differences.",
    },
    {
      name: "Kannathil Muthamittal",
      poster:
        "https://c.saavncdn.com/024/Kannathil-Muthamittal-Tamil-2002-500x500.jpg",
      rating: "8.4",
      trailer: "https://www.youtube.com/embed/LwyjdoNSN_o",
      summary:
        "At the age of nine, Amudha learns that she is an adopted child. Armed with a few bare facts, she desperately searches for her biological mother in war-ridden zones of Sri Lanka.",
    },
    {
      name: "Jungle Book",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_thejunglebook2016_19751_6b8cfcec.jpeg",
      rating: "7.5",
      trailer: "https://www.youtube.com/embed/C4qgAaxB_pc",
      summary:
        "Mowgli is a boy brought up in the jungle by a pack of wolves. When Shere Khan, a tiger, threatens to kill him, a panther and a bear help him escape his clutches.",
    },
    {
      name: "Inception",
      poster: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
      rating: "8.8",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      summary:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    },
  ];

  const [movielist, setMovielist] = useState(movies);
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/addmovies">Add Movie</Link>
        <Link to="/colorgame">Color Game</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/edit/:id">
          <Editdetails movielist={movielist} />
        </Route>
        <Route path="/movies/:id">
          <Moviedetails movielist={movielist} />
        </Route>
        <Route path="/movies">
          <Movietask movielist={movielist} setMovielist={setMovielist} />
        </Route>
        <Route path="/colorgame">
          <AddColor />
        </Route>
        <Route path="/addmovies">
          <AddMovie movielist={movielist} setMovielist={setMovielist} />
        </Route>
        <Route path="**">
          <Notfound />
        </Route>
      </Switch>

      {/* {details.map((nm) => (
        <Msg name={nm.name} image={nm.image} />
      ))} */}
    </div>
  );
}

function Moviedetails({ movielist }) {
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
      </div>
    </div>
  );
}

function Notfound() {
  return (
    <div className="not-found">
      <img
        className="not-found-image"
        src="https://media.istockphoto.com/vectors/error-page-not-found-vector-id1134840885?k=20&m=1134840885&s=170667a&w=0&h=EP0OXLMqhERM4nCzWRIE8K6w54DZ9qBs6BKcyhSeqp0="
        alt=""
      />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <img
        class="welcomepage"
        src="https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg"
        alt=""
      ></img>
    </div>
  );
}

function AddMovie({ setMovielist, movielist }) {
  const [moviename, setMoviename] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const movie = {
    name: moviename,
    poster: poster,
    rating: rating,
    summary: summary,
    trailer: trailer,
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
        <Button
          onClick={() => setMovielist([...movielist, movie])}
          variant="contained"
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}

function Editdetails({ setMovielist, movielist }) {
  const [moviename, setMoviename] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const movie = {
    name: moviename,
    poster: poster,
    rating: rating,
    summary: summary,
    trailer: trailer,
  };

  return (
    <div className="add_movie-container">
      <div className="movie-details">
        <TextField
          value={moviename}
          onChange={(mname) => setMoviename(mname.target.value)}
          variant="standard"
        />
        <TextField
          value={poster}
          onChange={(mposter) => setPoster(mposter.target.value)}
          variant="standard"
        />
        <TextField
          value={summary}
          onChange={(msummary) => setSummary(msummary.target.value)}
          variant="standard"
        />
        <TextField
          value={rating}
          onChange={(mrating) => setRating(mrating.target.value)}
          variant="standard"
        />
        <TextField
          value={trailer}
          onChange={(mtrailer) => setTrailer(mtrailer.target.value)}
          variant="standard"
        />
        <Button
          onClick={() => setMovielist([...movielist, movie])}
          variant="contained"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
