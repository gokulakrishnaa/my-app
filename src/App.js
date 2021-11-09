import { useState } from "react";
import "./App.css";
import { Movielist } from "./Movielist";
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
  return (
    <div className="App">
      {/* {details.map((nm) => (
        <Msg name={nm.name} image={nm.image} />
      ))} */}

      <Movielist />
      {/* <AddColor /> */}
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div>
      <div className="color-details">
        <TextField
          value={color}
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          label="Enter a color"
          variant="standard"
        />
        <Button
          onClick={() => setColors([...colors, color])}
          variant="contained"
        >
          Add Button
        </Button>
      </div>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "20px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
