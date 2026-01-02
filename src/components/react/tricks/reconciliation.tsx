import { useEffect, useReducer, useState } from "react";

export const Reconciliation1 = () => {
  const [isCompany, setIsCompany] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  return (
    <div
      style={{
        padding: 30,
        display: "flex",
        flexDirection: "column",
        gap: 19,
        border: "1px solid grey",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>
          Is company
          <input type="checkbox" onChange={(e) => setIsCompany(e.target.checked)} />
        </label>
        <label>
          <input type="checkbox" onChange={(e) => setHasKey(e.target.checked)} />
          Use Key
        </label>
      </div>
      {isCompany ? (
        <label>
          <span style={{ minWidth: 150, display: "inline-block" }}>Company tax id</span>
          <input style={{ border: "1px solid grey" }} key={hasKey ? "key1" : undefined} />
        </label>
      ) : (
        <label>
          <span style={{ minWidth: 150, display: "inline-block" }} key={hasKey ? "key2" : undefined}>
            Person tax id
          </span>

          <input style={{ border: "1px solid grey" }} />
        </label>
      )}
    </div>
  );
};

export const ComponentInComponent = () => {
  const [, rerender] = useReducer((x) => x + 1, 0);

  const Stupid = () => {
    useEffect(() => {
      console.log("Stupid mounted");
      return () => console.log("Stupid unmounted");
    }, []);
    return <div style={{ border: "1px solid grey" }}>Hello there, I'm Stupid</div>;
  };

  return (
    <div style={{ border: "1px solid pink", padding: 12 }}>
      <Stupid />
      <button style={{ background: "pink", color: "black", padding: 2 }} onClick={rerender}>
        rerender parent
      </button>
    </div>
  );
};
