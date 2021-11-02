import "./App.css";

function App() {
  const details = [
    {
      name: "gokul",
      image:
        "https://hs-marketing.imgix.net/images/blog/steve-jobs.jpg?auto=compress&fit=scale&w=1600&dpr=1",
    },
    {
      name: "steve",
      image:
        "https://hs-marketing.imgix.net/images/blog/steve-jobs.jpg?auto=compress&fit=scale&w=1600&dpr=1",
    },
    {
      name: "elon",
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },
  ];
  return (
    <div className="App">
      {details.map((nm) => (
        <Msg name={nm.name} image={nm.image} />
      ))}
    </div>
  );
}

function Msg({ name, image }) {
  return (
    <div>
      <img className="pic" src={image} alt={name} />
      <h1>hello {name} 😍</h1>
    </div>
  );
}

export default function Movie() {
  const movies = [
    {
      name: "Dark Knight Rises",
      poster: "https://m.media-amazon.com/images/I/51hcfZvo7FL.jpg",
      rating: "8.4/10",
      summary:
        "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
    },
    {
      name: "Shawshank Redemption",
      poster: "https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY741_.jpg",
      rating: "9.3/10",
      summary:
        "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    },
    {
      name: "Nayagan",
      poster: "https://pbs.twimg.com/media/FCN_qVuVEAIo2aW.jpg",
      rating: "8.7/10",
      summary:
        "Velu Nayakan, who witnesses the brutal murder of his father, kills a corrupt policeman and escapes to Mumbai, only to become a gangster.",
    },
    {
      name: "Thalapathi",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/616tUbWJV1L._RI_.jpg",
      rating: "8.5/10",
      summary:
        "Surya, a courageous man who was raised in the slums, fights for the rights of the poor. However, he becomes friends with Deva who hires him as his commander and changes his life completely.",
    },
    {
      name: "Departed",
      poster: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
      rating: "8.5/10",
      summary:
        "An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang.",
    },
    {
      name: "HeyRam",
      poster:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d72222d1c74b369a8a72f52c658710a98e854c81f1d439a0e6663e9cc65c6128._UY500_UX667_RI_V_TTW_.png",
      rating: "8/10",
      summary:
        "This fictional Indian drama tells the story of Saketh Ram (Kamal Hassan), a disillusioned man who tries to kill Mohandas Gandhi (Naseeruddin Shah). After sectarian violence claims the life of his wife, Aparna (Rani Mukharjee), Saketh becomes a Hindu extremist, and, although Muslims are responsible for his wife's death, he begins to blame Gandhi and his tolerant approach to religious differences.",
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
  return (
    <div className="display-movie">
      <h1 className="movie-name">{name}</h1>
      <img className="movie-poster" src={poster} alt={name} />
      <p className="movie-rating">
        <b>Rating : </b>
        {rating}
      </p>
      <p className="movie-summary">
        <b>Summary : </b>
        {summary}
      </p>
    </div>
  );
}
