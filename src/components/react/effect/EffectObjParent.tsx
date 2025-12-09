import React, { useMemo, useState } from "react";
import UseEffectWithObject from "./UseEffectWithObject";

const outsideObj = { location: "outside the function" };

const EffectObjParent = () => {
  const [, setTick] = useState(0);

  const memoObj = useMemo(
    () => ({
      location: "in useMemo",
    }),
    []
  );

  const bodyInlineObj = { location: "just in function body" };

  outsideObj.location = Math.random() + "";

  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <UseEffectWithObject obj={outsideObj} />
        <UseEffectWithObject obj={memoObj} />
        <UseEffectWithObject obj={bodyInlineObj} />
      </div>
      <button onClick={() => setTick((t) => t + 1)}>re-render parent</button>
    </div>
  );
};

export default EffectObjParent;
