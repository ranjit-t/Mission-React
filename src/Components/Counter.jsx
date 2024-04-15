import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count is {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Inc
      </button>
    </>
  );
}
