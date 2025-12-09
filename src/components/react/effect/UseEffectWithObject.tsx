import React, { useEffect } from "react";

const UseEffectWithObject = ({ obj }) => {
  console.log("child re-renders");
  useEffect(() => {
    console.log("useEffect body, obj > ", obj);
  }, [obj]);

  return <div style={{ border: "1px solid grey" }}>{obj.location}</div>;
};

export default UseEffectWithObject;
