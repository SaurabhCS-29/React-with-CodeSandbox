import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const apiKey = `8ebb449794674c939fb162447242007`;
  const city = `Pune`;
  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=8ebb449794674c939fb162447242007&q=Pune&api=no",
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Weather app</h1>
      </div>
    </>
  );
}

export default App;
