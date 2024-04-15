import React, { useState } from "react";

export default function Greetings() {
  const [greetings, setGreetings] = useState("");
  return (
    <>
      <h1>Greeting</h1>
      <p>Greeting is {greetings}</p>
      <button
        onClick={() => {
          setGreetings("Namaste !");
        }}
      >
        Indian
      </button>
      <button
        onClick={() => {
          setGreetings("Bonjour !");
        }}
      >
        French
      </button>
    </>
  );
}
