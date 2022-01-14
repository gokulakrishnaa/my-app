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
import { TicTacToe } from "./TicTacToe";

export default function App() {
  const history = useHistory();
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
        </div>
      </Paper>
    </ThemeProvider>
  );
}
