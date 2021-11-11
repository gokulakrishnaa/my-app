import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div className="add_color">
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
