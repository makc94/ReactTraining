import { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div>
      <h2>{likes}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter
