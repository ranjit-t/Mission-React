import React from "react";

export default function Greetings() {
  const [greetings, setGreetings] = useState("");
  return (
    <>
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
