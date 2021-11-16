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

  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // useEffect(() => {
  //   fetch("https://616a3fa516e7120017fa0ee6.mockapi.io/movies")
  //     .then((data) => data.json())
  //     .then((mvs) => setMovielist(mvs));
  // }, []);

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
              <Editdetails />
            </Route>
            <Route path="/movies/:id">
              <Moviedetails />
            </Route>
            <Route path="/movies">
              <Movietask />
            </Route>
            <Route path="/colorgame">
              <AddColor />
            </Route>
            <Route path="/tictactoe">
              <TicTacToe />
            </Route>
            <Route path="/addmovies">
              <AddMovie />
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

  // const restart = () => {
  //   if (winner === "X" && winner === "O") {
  //     setBoard(null);
  //   }
  // };

  return (
    <div className="full-game">
      <h2 className="game-title">Tic - Tac - Toe</h2>
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
