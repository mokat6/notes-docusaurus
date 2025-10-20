import React, { useState } from "react";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Footer from "@theme/Footer";

function lol() {
  const [val, setVal] = useState("");
  return (
    <>
      <div>lol</div>
      <button onClick={() => setVal(Math.random() + "")}>DEVIL IS CUMING</button>
      <p>{val}</p>
      <Footer />
    </>
  );
}

export default lol;
