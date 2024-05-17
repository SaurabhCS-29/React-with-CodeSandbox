import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPasword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // useCallback hook
  const passwordGenretor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPasword(pass);
  }, [length, numberAllowed, charAllowed, setPasword]);

  const copyPasswordToClipBord = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hook
  useEffect(() => {
    passwordGenretor();
  }, [length, numberAllowed, charAllowed, passwordGenretor]);
  return (
    <>
      <h1 className="text-4xl text-white text-center my-3">
        Password Genretor
      </h1>
      <div
        className="w-full max-w-mb mx-auto shadow-mb rounded-lg px-4 
         py-6 my-9 text-orange-500 bg-gray-800"
      >
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-500 text-white
            px-3 py-2 shrink-0
            hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-black-300"
            onClick={copyPasswordToClipBord}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="" flex items-center gap-x-1>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
