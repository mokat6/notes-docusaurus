import React, { useState } from "react";
import Child from "./Child";

function Mounting() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Child />}
      <button onClick={() => setShow((prev) => !prev)}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default Mounting;
