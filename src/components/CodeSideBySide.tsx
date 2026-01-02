import React, { PropsWithChildren, ReactNode } from "react";
import CodeBlock from "@theme/CodeBlock";

interface Props {
  children: {
    type: "code" | "text";
    language?: string;
    content: string;
  }[];
}

// const CodeSideBySide = ({ codeString1, codeString2 }: Props) => {
//   return (
//     <div style={{ display: "flex", gap: 20 }}>
//       <div style={{ flex: 1 }}>
//         <CodeBlock language="jsx">{codeString1}</CodeBlock>
//       </div>
//       <div style={{ flex: 1 }}>
//         <CodeBlock language="jsx">{codeString2}</CodeBlock>
//       </div>
//     </div>
//   );
// };
const CodeSideBySide = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {children.map((item) => {
        return (
          <div style={{ flex: 1, minWidth: "45%" }}>
            {item.type === "code" ? (
              <CodeBlock language={item.language ?? "tsx"}>{item.content}</CodeBlock>
            ) : (
              <span>{item.content}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CodeSideBySide;
