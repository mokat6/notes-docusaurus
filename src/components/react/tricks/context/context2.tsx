import React, { useContext, useMemo, useState } from "react";

const Closure1 = () => {
  const [state, setState] = useState("");
  console.log("parent re-render");
  const contextValue = { state, setState };

  const sidebarMemo = useMemo(() => <Sidebar />, []);
  const contentMemo = useMemo(() => <Content />, []);
  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={{ padding: 33 }}>Top level Parent, holds context and renders Layout</div>
      <Layout sidebar={sidebarMemo} content={contentMemo} />
    </ThemeContext.Provider>
  );
};

export default Closure1;

const Sidebar = () => {
  console.log("Sidebar re-renders");

  return <div>Sidebar here</div>;
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

const Page = React.memo(() => {
  console.log("Page renders");

  return (
    <div style={{ border: "1px dashed pink", padding: 10 }}>
      Page (Mid Child here), empty shell
      <DeepChild />
    </div>
  );
});

const Layout = React.memo(({ sidebar, content }: { sidebar: React.ReactNode; content: React.ReactNode }) => {
  console.log("Layout renders");
  return (
    <div style={{ border: "1px dashed green" }}>
      <div>Layout here</div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 200 }}>{sidebar}</div>
        <div style={{ flex: 1 }}>{content}</div>
      </div>
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
