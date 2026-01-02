import React, { useState } from "react";

const PropDrilling = () => {
  const [state, setState] = useState("");
  console.log("parent re-render");
  return (
    <div style={{ background: "#346", padding: 22, display: "flex", flexDirection: "column", gap: 22 }}>
      <button
        onClick={() => setState(Math.random().toString())}
        style={{ alignSelf: "start", padding: 4, background: "#134", border: "1px solid gray" }}
      >
        update state
      </button>
      <Mid state={state} />
    </div>
  );
};

export default PropDrilling;

const Mid = ({ state }: { state: string }) => {
  console.log("Mid renders >> ");

  return (
    <div style={{ border: "1px dashed pink", padding: 10 }}>
      Mid Child here, empty shell, passing stuff
      <DeepChild state={state} />
    </div>
  );
};

const DeepChild = ({ state }: { state: string }) => {
  console.log("Deep child re-renders > ", state);

  return <div style={{ border: "1px solid gray" }}>Deep child</div>;
};
