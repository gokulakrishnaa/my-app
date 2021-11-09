import { useState } from "react";
import Button from "@mui/material/Button";

function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className="counter-container">
      <Button
        variant="text"
        className="likes-dislikes"
        onClick={() => {
          setlike(like + 1);
        }}
      >
        👍 {like}
      </Button>
      <Button
        variant="text"
        className="likes-dislikes"
        onClick={() => {
          setdislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </Button>
    </div>
  );
}

export { Counter };
