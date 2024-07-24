import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/SaurabhCS-29")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 p-4 text-2xl grid  place-items-center">
      <h1>Github Profile</h1>
      <img src={data.avatar_url} alt="" height="250px" width="250px" />
      <h3>Username : {data.login}</h3>
      <h3>Name : {data.name}</h3>
      <p>Followers : {data.followers}</p>
      <p>Followings : {data.following}</p>
      <button
        href={data.html_url}
        className="text-white text-sm bg-orange-700 hover:bg-orange-800 m-2 
          p-3 rounded-lg "
      >
        Visit Profile...
      </button>
    </div>
  );
}
export default Github;
