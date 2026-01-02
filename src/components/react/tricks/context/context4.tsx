import React, { useContext, useMemo, useState } from "react";

/* =========================
   ROUTE ENTRY
========================= */

export default function DashboardRoute() {
  return (
    <DashboardProviders>
      <DashboardPage />
    </DashboardProviders>
  );
}

/* =========================
   ROUTE-SCOPED CONTEXT
========================= */

type DashboardContextType = {
  value: string;
  setValue: (v: string) => void;
};

const DashboardContext = React.createContext<DashboardContextType | null>(null);

function DashboardProviders({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("");

  const contextValue = useMemo(() => ({ value, setValue }), [value]);

  console.log("🧠 DashboardProviders render");

  return <DashboardContext.Provider value={contextValue}>{children}</DashboardContext.Provider>;
}

function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used inside provider");
  return ctx;
}

/* =========================
   PAGE (STABLE SHELL)
========================= */

const DashboardPage = React.memo(() => {
  console.log("📄 DashboardPage render");

  return <DashboardLayout sidebar={<Sidebar />} content={<Content />} />;
});

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
    <div style={{ marginTop: 10 }}>
      <div>Value: {value}</div>
      <button style={{ background: "#111", padding: 2 }} onClick={() => setValue(Math.random().toString())}>
        update context
      </button>
    </div>
  );
}
