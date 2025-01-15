import React, { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [move, setMove] = useState(0);
  const[counter, setCounter] =useState(0)

  useEffect(() => {
    const nomi = setInterval(() => {
      setNumber(Math.floor(Math.random(number) * 100));
      setMove(Math.floor(Math.random(move) * 1000));
    }, 1000);
  }, []);

  return (
    <>

    <h2 style={{
      fontFamily:"sans-serif"
    }}>Counter : {counter}</h2>


      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            top: number,
            left: move,
            background: "darkblue",
            borderRadius: "50%",
          }}

          onClick={()=>{
            setCounter(counter + 1)
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
