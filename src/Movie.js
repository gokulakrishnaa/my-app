import { useState } from "react";
import { Counter } from "./Counter";
import Button from "@mui/material/Button";

export function Movie() {
  const movies = [
    {
      name: "Dark Knight Rises",
      poster: "https://m.media-amazon.com/images/I/51hcfZvo7FL.jpg",
      rating: "8.4",
      summary:
        "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
    },
    {
      name: "Shawshank Redemption",
      poster: "https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY741_.jpg",
      rating: "9.3",
      summary:
        "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    },
    {
      name: "Nayagan",
      poster: "https://pbs.twimg.com/media/Cjxpt7aVEAAOfts.jpg",
      rating: "8.7",
      summary:
        "Velu Nayakan, who witnesses the brutal murder of his father, kills a corrupt policeman and escapes to Mumbai, only to become a gangster.",
    },
    {
      name: "Departed",
      poster: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
      rating: "8.5",
      summary:
        "An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang.",
    },
    {
      name: "HeyRam",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/71corEX9jOL._RI_.jpg",
      rating: "8",
      summary:
        "This fictional Indian drama tells the story of Saketh Ram (Kamal Hassan), a disillusioned man who tries to kill Mohandas Gandhi (Naseeruddin Shah). After sectarian violence claims the life of his wife, Aparna (Rani Mukharjee), Saketh becomes a Hindu extremist, and, although Muslims are responsible for his wife's death, he begins to blame Gandhi and his tolerant approach to religious differences.",
    },
    {
      name: "Kannathil Muthamittal",
      poster:
        "https://c.saavncdn.com/024/Kannathil-Muthamittal-Tamil-2002-500x500.jpg",
      rating: "8.4",
      summary:
        "At the age of nine, Amudha learns that she is an adopted child. Armed with a few bare facts, she desperately searches for her biological mother in war-ridden zones of Sri Lanka.",
    },
    {
      name: "Jungle Book",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_thejunglebook2016_19751_6b8cfcec.jpeg",
      rating: "7.5",
      summary:
        "Mowgli is a boy brought up in the jungle by a pack of wolves. When Shere Khan, a tiger, threatens to kill him, a panther and a bear help him escape his clutches.",
    },
    {
      name: "Inception",
      poster: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
      rating: "8.8",
      summary:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    },
  ];
  return (
    <div className="Movie-App">
      {movies.map((data) => (
        <Display
          name={data.name}
          poster={data.poster}
          rating={data.rating}
          summary={data.summary}
        />
      ))}
    </div>
  );
}

function Display({ name, poster, rating, summary }) {
  const [show, setShow] = useState(true);
  const styles = { color: rating > 8 ? "green" : "blue", fontWeight: "bold" };
  const summaryStyles = { display: show ? "block" : "none" };
  return (
    <div className="display-movie">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={styles}>
          ⭐ {rating}
        </p>
      </div>
      <Button
        onClick={() => setShow(!show)}
        className="description"
        variant="outlined"
      >
        {show ? "Hide" : "Show"} Description
      </Button>
      <p className="movie-summary" style={summaryStyles}>
        Summary : {summary}
      </p>
      {/* {show ? <p className="movie-summary">Summary : {summary}</p> : ""} */}
      <Counter />
    </div>
  );
}
