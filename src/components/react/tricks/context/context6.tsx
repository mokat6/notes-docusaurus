import React, { useContext, useMemo, useState } from "react";

/* =========================
   ROUTE ENTRY
========================= */

export default function DashboardPage() {
  console.log("📄 DashboardPage render");

  return (
    <div>
      <div style={{ padding: 20 }}>
        Page = {"<contextProviders />"} + {"<Layout />"}
      </div>
      <DashboardContextProvider>
        <DataContextProvider>
          <DashboardLayout sidebar={<Sidebar />} content={<Content />} />
        </DataContextProvider>
      </DashboardContextProvider>
    </div>
  );
}

/* =========================
   ROUTE-SCOPED CONTEXT
========================= */

type DashboardContextType = {
  value: string;
  setValue: (v: string) => void;
};
type DataContextType = {
  data: number;
  setData: (v: number) => void;
};

const DashboardContext = React.createContext<DashboardContextType | null>(null);
const DataContext = React.createContext<DataContextType | null>(null);

function DashboardContextProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("");

  const contextValue = { value, setValue };

  console.log("🧠 DashboardContextProvider render");

  return <DashboardContext.Provider value={contextValue}>{children}</DashboardContext.Provider>;
}
function DataContextProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(0);

  const contextData = { data, setData };

  console.log("🧠 DataContextProvider render");

  return <DataContext.Provider value={contextData}>{children}</DataContext.Provider>;
}

function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used inside provider");
  return ctx;
}
function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used inside provider");
  return ctx;
}

/* =========================
   LAYOUT (LOCAL UI STATE)
========================= */

function DashboardLayout({ sidebar, content }: { sidebar: React.ReactNode; content: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  console.log("📐 Layout render");

  return (
    <div style={{ border: "2px dashed green" }}>
      <div style={{ padding: 15, display: "flex" }}>
        <button style={{ background: "#111", padding: 3 }} onClick={() => setCollapsed((c) => !c)}>
          toggle sidebar
        </button>
        <div style={{ marginLeft: "auto" }}>Layout component </div>
      </div>
      <div style={{ display: "flex", marginTop: 10 }}>
        <div style={{ width: collapsed ? 60 : 200, background: "#333" }}>{sidebar}</div>
        <div style={{ flex: 1 }}>{content}</div>
      </div>
    </div>
  );
}

/* =========================
   HEAVY SLOTS
========================= */

const Sidebar = () => {
  console.log("📦 Sidebar render");
  return <div>Sidebar</div>;
};

const Content = () => {
  console.log("📦 Content render");
  return (
    <div>
      Content
      <DeepChild />
      <DeepChild2 />
    </div>
  );
};

/* =========================
   CONTEXT CONSUMER
========================= */

function DeepChild() {
  const { value, setValue } = useDashboard();

  console.log("🔁 DeepChild render", value);

  return (
    <div style={{ marginTop: 10, border: "1px solid pink" }}>
      <div>DeepChild 1</div>
      <div>Value: {value}</div>
      <button style={{ background: "#111", padding: 2 }} onClick={() => setValue(Math.random().toString())}>
        update context
      </button>
    </div>
  );
}

function DeepChild2() {
  const { data, setData } = useData();

  console.log("🔁 DeepChild2 render", data);

  return (
    <div style={{ marginTop: 10, border: "1px solid pink" }}>
      <div>DeepChild 2</div>
      <div>Data: {data}</div>
      <button style={{ background: "#111", padding: 2 }} onClick={() => setData(Math.random())}>
        update context
      </button>
    </div>
  );
}
