import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Component/Card";

function App() {
  return (
    <>
      <h1 className="bg-sky-500 text-black rounded-xl p-6 mb-4">
        Tailwind test
      </h1>
      <Card username="Saurabh" btnText="Read More" />
      <Card username="About MacBook" btnText="Show More" />
    </>
  );
}

export default App;
