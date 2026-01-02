import { useState } from "react";

export const Component = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="containerLOL" style={{ display: "flex", height: 100, background: "#656", marginBottom: 22 }}>
      <div className="sidebar" style={{ width: isCollapsed ? 40 : 200 }}>
        <VerySlowComponent />
      </div>
      <div className="content" style={{ border: "1px solid green" }}>
        <button
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          hide/show
        </button>
        <BunchOfSlowStuff />
      </div>
    </div>
  );
};

const Layout = ({ column, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="containerLOL" style={{ display: "flex", height: 100, background: "#656", marginBottom: 22 }}>
      <div className="sidebar" style={{ width: isCollapsed ? 40 : 200 }}>
        {column}
      </div>
      <div className="content" style={{ border: "1px solid green" }}>
        <button
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          hide/show
        </button>
        {content}
      </div>
    </div>
  );
};

export const ComponentFixed = () => {
  return <Layout column={<VerySlowComponent />} content={<BunchOfSlowStuff />} />;
};

const VerySlowComponent = () => {
  console.log("very slow component renders");

  return <div style={{ border: "1px solid pink" }}>slow column</div>;
};

const BunchOfSlowStuff = () => {
  console.log("BunchOfSlowStuff renders");

  return <div style={{ padding: 22, border: "1px dashed gray" }}>bunch of slow stuff</div>;
};
