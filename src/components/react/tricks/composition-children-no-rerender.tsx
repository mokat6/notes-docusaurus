import React, { useReducer, useState, type PropsWithChildren } from "react";

const CompositionWithChildren = () => {
  const [, rerender] = useReducer((x) => x + 1, 0);

  return (
    <div style={{ display: "flex", gap: 22 }}>
      <ComponentWithScroll>
        <HeavyComponent />
      </ComponentWithScroll>
      <button onClick={rerender}>re-render parent</button>
    </div>
  );
};

export default CompositionWithChildren;

const ComponentWithScroll = ({ children }: PropsWithChildren) => {
  const [scrollY, setScrollY] = useState(0);

  console.log("ComponentWithScroll renders >> ", scrollY);

  return (
    <div
      style={{ overflowY: "scroll", height: 100, padding: 20 }}
      onScroll={({ currentTarget }) => setScrollY(currentTarget.scrollTop)}
    >
      some text <br />
      some text <br />
      some text <br />
      some text <br />
      some text <br />
      some text <br />
      {children}
    </div>
  );
};

let cc = 0;

const HeavyComponent = () => {
  console.log("heavy component re-renders > ", cc++);

  return <div style={{ border: "1px solid gray" }}>Heavy component</div>;
};
