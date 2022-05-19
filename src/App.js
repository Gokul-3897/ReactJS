import React, { useState } from "react";

function App() {
  console.log("Gokul");

  const [count, setCount] = useState(10);
  const [inputVal,updateInput] = useState("Gokul")

 function incrementVal() {
   setCount(count+1);
   updateInput("Gokul")
 }

 function decrementVal() {
  setCount(count-1);
  updateInput("Gokul");
}

function valueUpdated(eve) {
  var el = eve.target.value;
  updateInput(eve.target.value)
}

  return (
    <>
      <h1>Hellow World.....</h1>
      <h2>{count}</h2>
      <button onClick={incrementVal}>IncrementValue</button>
      <br />
      <button onClick={decrementVal}>DecrementValue</button>
      <input onChange={valueUpdated}/>
      <h4>{inputVal}</h4>
    </>
  );
}

export default App;
