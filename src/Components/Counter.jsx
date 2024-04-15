import React from "react";

export default function Counter({ count, setCount }) {
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
