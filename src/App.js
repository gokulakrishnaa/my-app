import "./App.css";
import { Movietask } from "./Movietask";
import { Switch, Route, Redirect } from "react-router-dom";
import { AddColor } from "./AddColor";
import { useState } from "react";
import { Notfound } from "./Notfound";
import { Welcome } from "./Welcome";
import { Editdetails } from "./Editdetails";
import { AddMovie } from "./AddMovie";
import { Moviedetails } from "./Moviedetails";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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
  const history = useHistory();
  const [movielist, setMovielist] = useState(movies);
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static" style={{ marginBottom: "20px" }}>
            <Toolbar variant="dense">
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/")}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/movies")}
              >
                Movies
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/addmovies")}
              >
                Add Movies
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/colorgame")}
              >
                Color Game
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/tictactoe")}
              >
                Tic-Tac-Toe
              </Button>
              <Button
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                style={{ marginLeft: "auto" }}
                variant="text"
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "Dark" : "Light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/addmovies">Add Movie</Link>
        <Link to="/colorgame">Color Game</Link>
        </nav> */}
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies/edit/:id">
              <Editdetails movielist={movielist} setMovielist={setMovielist} />
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
            <Route path="/tictactoe">
              <TicTacToe />
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
      </Paper>
    </ThemeProvider>
  );
}

// function TicTacToe() {
//   const [board, setBoard] = useState([
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//   ]);
//   const [isXTurn, setIsXTurn] = useState(true);
//   const handleClick = (index) => {
//     const boardCopy = [...board];
//     boardCopy[index] = isXTurn ? "X" : "O";
//     setBoard(boardCopy);
//     setIsXTurn(!isXTurn);
//   };
//   return (
//     <div className="board">
//       {board.map((val, index) => (
//         <GameBox val={val} onPlayerClick={() => handleClick(index)} />
//       ))}
//     </div>
//   );
// }

// function GameBox({ onPlayerClick, val }) {
//   const [val, setVal] = useState(null);
//   const styles = { color: val === "X" ? "green" : "red" };
//   return (
//     <div onClick={onPlayerClick} style={styles} className="game-box">
//       {val}
//     </div>
//   );
// }

function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXTurn, setIsXTurn] = useState(true);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const handleClick = (index) => {
    if (winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is : {winner}</h2> : ""}
    </div>
  );
}

function GameBox({ onPlayerClick, val }) {
  // const [val, setVal] = useState(null);
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div onClick={onPlayerClick} style={styles} className="game-box">
      {val}
    </div>
  );
}
