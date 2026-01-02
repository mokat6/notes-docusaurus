import React, { useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react";

const Parent = () => {
  const apiRef = useRef<ChildApi>(null);

  const onClick = () => {
    apiRef.current?.focus();
    apiRef.current?.shake();
  };

  return (
    <div style={{ display: "flex", gap: 22 }}>
      <Child apiRef={apiRef} />
      <button onClick={onClick}>do it</button>
    </div>
  );
};

export default Parent;

export interface ChildApi {
  focus(): void;
  shake(): void;
}

const Child = ({ apiRef }: { apiRef: React.Ref<ChildApi> }) => {
  const internalRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    apiRef,
    () => ({
      focus: () => {
        internalRef.current?.focus();
      },
      shake: () => {
        const el = internalRef.current;
        if (!el) return;

        el.animate(
          [
            { transform: "translateX(0px)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(0px)" },
          ],
          {
            duration: 300,
            easing: "ease-in-out",
          }
        );
      },
    }),
    []
  );

  return (
    <div>
      <input ref={internalRef} style={{ border: "1px solid grey" }} />
    </div>
  );
};
