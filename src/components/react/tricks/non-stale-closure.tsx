import React, { memo, useCallback, useMemo, useState } from "react";

export default function Closure1() {
  const [s1, setS1] = useState("0");
  console.log("s1   ", s1);

  const s1Ref = React.useRef(s1);
  s1Ref.current = s1;

  const cb = useCallback(() => {
    console.log("cb > ", s1Ref.current);
  }, []);

  return (
    <>
      <input className="border" value={s1} onChange={(e) => setS1(e.target.value)} />
      <div>closure1</div>
      <C1m cb={cb} />
    </>
  );
}

const C1 = ({ cb }: { cb: () => void }) => {
  console.log("heavy component rerenders");

  return (
    <div style={{ border: "1px solid brown" }}>
      <h1>Heavy and slow comp</h1>
      <button onClick={cb}>hit</button>
    </div>
  );
};

const C1m = memo(C1);
