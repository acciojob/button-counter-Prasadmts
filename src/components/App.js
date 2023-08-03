import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {

  const [number, setNumber] = useState(0);

  // function increment(e) {
  //   setNumber(e.target.value + 1);
  // }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {number} times</p>
        <button onClick={() => setNumber(number + 1)}>Click me</button>
    </div>
  )
}

export default App
