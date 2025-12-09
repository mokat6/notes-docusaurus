import React, { useEffect, useRef, useState } from "react";

let lets = "let init";

const Child = () => {
  const refs = useRef("ref init");
  const [state, setState] = useState("state init");

  useEffect(() => {
    console.log("Child mounts");
    return () => console.log("Child __ unmounting _!! lol");
  }, []);

  const changeColor = (val: string) => {
    refs.current = `ref ${val}`;
    lets = `let ${val}`;
    setState(`state ${val}`);
  };

  return (
    <div style={{ border: "1px solid grey" }}>
      <ul>
        <li>let - {lets}</li>
        <li>ref.current - {refs.current}</li>
        <li>state - {state}</li>
      </ul>
      <button onClick={() => changeColor("white")}>white</button>
      <button onClick={() => changeColor("red")}>red</button>
      <button onClick={() => changeColor("blue")}>blue</button>
    </div>
  );
};

export default Child;
