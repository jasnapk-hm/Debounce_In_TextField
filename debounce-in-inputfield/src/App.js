import { useEffect, useState, useCallback } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [inputValue, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(inputValue);
    if (e.target.value === "") setMessage("");

    // debouncedCheck(inputValue); 
  };
  // function debounce(func, delay) {
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => func(...args), delay);
  //   };
  // }
  // const debouncedCheck = debounce(function (inputValue) {
  //   console.log("fetch call");
  //   if (data.some((el) => el === inputValue)) {
  //     setMessage("This username already exists.");
  //   } else {
  //     setMessage("Username is available.");
  //   }
  // }, 800); // Delay of 500ms


  // throttle function
  function throttle(func, delay) {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        func(...args);
      }
    };
  }

  const throttledHandleClick = throttle(() => {
    const startTime = new Date().getTime();

    setCount(count + 1);
    const trigger = setTimeout(() => {
      const now = new Date().getTime();

      console.log("timedisff", now - startTime);
      setTriggered(triggered + 1);
    }, 800);

    // Clear the timeout if needed
    return () => {
      clearTimeout(trigger);
    };
  }, 800); 

  // const handleClick = () => {
  //   const startTime = new Date().getTime();

  //   setCount(count + 1);
  //   const trigger = setTimeout(() => {
  //     const now = new Date().getTime();

  //     console.log("timedisff", now - startTime);
  //     setTriggered(triggered + 1);
  //   }, [800]);
  //   return () => {
  //     clearTimeout(trigger);
  //   };
  // };

  // creating debounce method

  // function debounce(func, delay) {
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => func(...args), delay);
  //   };
  // }
  // const debouncedFetchCall = debounce(function () {
  //   console.log("fetch call");
  //   if (data.some((el) => el === inputValue)) {
  //     setMessage("search data already exist");
  //     return;
  //   }
  //   setMessage("username you can use");
  // }, 800);

  // useEffect(() => {
  //   if (inputValue === "") return;

  //   debouncedFetchCall();

  // }, [inputValue, debouncedFetchCall]);


  useEffect(() => {
    if (inputValue === "") return;
    const timer = setTimeout(() => {
      console.log("fetch call");
      if (data.some((el) => el === inputValue)) {
        setMessage("serach data already exist");
        return;
      }
      setMessage("username you can use");
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div className="Box">
      <h1>Debouncing - InputField</h1>

      <label>Type the username</label>
      <input
        onChange={handleChange}
        type="text"
        id="username"
        className="input"
        value={inputValue}
      ></input>
      <p>{message}</p>

      <button className="input" onClick={throttledHandleClick}>
        Throtteling button
      </button>
      <p>button pressed{count}</p>
      <p>triggered api calls:{triggered}</p>
    </div>
  );
}

export default App;
