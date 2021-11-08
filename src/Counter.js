import { useState } from "react";

function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className="counter-container">
      <button
        className="likes-dislikes"
        onClick={() => {
          setlike(like + 1);
        }}
      >
        👍 {like}
      </button>
      <button
        className="likes-dislikes"
        onClick={() => {
          setdislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </button>
    </div>
  );
}

export { Counter };
