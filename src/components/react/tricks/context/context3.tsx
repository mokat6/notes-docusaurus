import React, { useContext, useMemo, useState } from "react";

const Closure1 = () => {
  return (
    <div>
      <div style={{ padding: 33 }}>Page, renders {"<Layout sidebar={} content={} />"} </div>
      <Layout sidebar={<Sidebar />} content={<Content />} />
    </div>
  );
};

export default Closure1;

const Sidebar = () => {
  console.log("Sidebar re-renders");

  return <div>Side bar here</div>;
};

const Content = () => {
  console.log("Content re-renders");
  return (
    <div>
      <div>Content here</div>
      <DeepChild />
    </div>
  );
};

const Layout = React.memo(({ sidebar, content }: { sidebar: React.ReactNode; content: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [state, setState] = useState("");
  const contextValue = useMemo(() => ({ state, setState }), [state, setState]);
  console.log("Layout renders");

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={{ border: "1px dashed green" }}>
        <div>
          Layout here ---
          <button
            style={{ background: "#223" }}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            hide/show
          </button>
        </div>

        <div style={{ display: "flex", background: "#135" }}>
          <div style={{ width: isCollapsed ? 50 : 200 }}>{sidebar}</div>
          <div style={{ flex: 1 }}>{content}</div>
        </div>
      </div>
    </ThemeContext.Provider>
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
