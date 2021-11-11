import { useState } from "react";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className="counter-container">
      {/* <Button
        variant="text"
        className="likes-dislikes"
        onClick={() => {
          setlike(like + 1);
        }}
      >
        👍 {like}
      </Button> */}
      <IconButton
        className="likes-dislikes"
        onClick={() => {
          setlike(like + 1);
        }}
        aria-label="like"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      {/* <Button
        variant="text"
        className="likes-dislikes"
        onClick={() => {
          setdislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </Button> */}
      <IconButton
        className="likes-dislikes"
        onClick={() => {
          setdislike(dislike + 1);
        }}
        aria-label="dislike"
        color="primary"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}

export { Counter };
