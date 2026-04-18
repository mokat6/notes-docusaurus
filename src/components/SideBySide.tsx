import React, { PropsWithChildren } from "react";
import CodeBlock from "@theme/CodeBlock";

const SideBySide = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {React.Children.map(children, (child) => (
        <div style={{ flex: 1, minWidth: "45%" }}>{child}</div>
      ))}
    </div>
  );
};

SideBySide.Code = ({ code, language = "tsx" }: { code: string; language: string }) => {
  return <CodeBlock language={language}>{code}</CodeBlock>;
};
export default SideBySide;
