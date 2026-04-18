import React, { useContext } from "react";

const AssContext = React.createContext("default value, in case no prodiver, check it.");

const ContextDemo = () => {
  return (
    <>
      <AssContext.Provider value="switcharoooo">
        <Section1 />
      </AssContext.Provider>
      <Section1 />
      <Section2 />
    </>
  );
};

export default ContextDemo;

const Section1 = () => {
  const ass = useContext(AssContext);
  return (
    <div className="m-10">
      <h1>Section1</h1>
      <p style={{ color: "#b58ced" }}>{ass}</p>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="m-10">
      <h1>Section2</h1>
      <AssContext.Consumer>
        {(ass) => {
          return <p style={{ color: "#b58ced" }}>{ass}</p>;
        }}
      </AssContext.Consumer>
    </div>
  );
};
