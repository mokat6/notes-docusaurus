import React, { useContext, useState } from "react";

const Closure1 = () => {
  const [state, setState] = useState("");
  console.log("parent re-render");
  const contextValue = { state, setState };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={{ background: "#346", padding: 22, display: "flex", flexDirection: "column", gap: 22 }}>
        <div>Top level, only holds context, and renders one memo'ed Page</div>
        <button
          className="border"
          onClick={() => setState(Math.random().toString())}
          style={{ alignSelf: "start", padding: 4, background: "#134" }}
        >
          update state
        </button>

        <Page />
      </div>
    </ThemeContext.Provider>
  );
};

export default Closure1;

const Page = React.memo(() => {
  console.log("Page renders");

  return (
    <div style={{ border: "1px dashed pink", padding: 10 }}>
      Page (Mid Child here), empty shell
      <DeepChild />
    </div>
  );
});

const DeepChild = () => {
  const { state, setState } = useTheme();

  console.log("Deep child re-renders > ", state);

  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <div>Deep child {state}</div>
      <button style={{ background: "black" }} onClick={() => setState(Math.random().toString())}>
        child updates context
      </button>
    </div>
  );
};

type ThemeContextType = {
  state: string;
  setState: (s: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

// 2️⃣ Custom hook for convenience
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
