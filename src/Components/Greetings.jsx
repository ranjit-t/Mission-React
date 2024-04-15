import React, { useState } from "react";

export default function Greetings({ count }) {
  const [greetings, setGreetings] = useState("");
  return (
    <>
      <p>Greeting is {greetings}</p>
      <button
        onClick={() => {
          if (count === 10) {
            setGreetings("you exceeded maximum count");
          } else {
            setGreetings("Namaste !");
          }
        }}
      >
        Indian
      </button>
      <button
        onClick={() => {
          if (count === 10) {
            setGreetings("you exceeded maximum count");
          } else {
            setGreetings("Bonjour !");
          }
        }}
      >
        French
      </button>
    </>
  );
}
