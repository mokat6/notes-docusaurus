import React from "react";
import CodeBlock from "@theme/CodeBlock";

const UsageHelp = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Usage help</h1>
      <h2 style={{ textAlign: "center" }}>Side by Side</h2>

      <CodeBlock language={"tsx"}>{`
import SideBySide from "@site/src/components/SideBySide";

<SideBySide>
{/* if not <span>, then it's gonna be <p> with larger margins */}
<span>Title 1 </span>
<span>Title 1 </span>

{/* need a space here!!!! around this code block */}
\`\`\`js
    <div className="some code, actual code lol">
      <AssContext.Provider value="switcharoooo">
        <Section1 />
      </AssContext.Provider>
    </div>
  );
};
\`\`\`
<div>Some other stuff</div>
</SideBySide>
      `}</CodeBlock>
      <h2 style={{ textAlign: "center" }}>Tabs</h2>
      <CodeBlock language={"tsx"}>{`
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>
<TabItem value="js" label="JavaScript">

\`\`\`js
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

</TabItem>
<TabItem value="py" label="Python">

\`\`\`py
def hello_world():
  print("Hello, world!")
\`\`\`

</TabItem>
<TabItem value="java" label="Java">

\`\`\`java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
\`\`\`

</TabItem>
</Tabs>
      `}</CodeBlock>
      <h2>Top of the page metadata</h2>
      <p>Makes the page full width</p>
      <CodeBlock language={""}>{`
---
hide_table_of_contents: true

## adds Alert at the page top, only visible in DEV, not PROD
draft: true 

title: Title in navigation and Page main heading (if no # haha, but if yes, then still in bread-crumb)
# if no title, and no \`# headin\` then file name becomes the title

description: Markdown page SEO description

slug: /my-slugzz    only the slug, can be slug with or without /
# if no slug, then file name is the slug
---
      `}</CodeBlock>
    </div>
  );
};

export default UsageHelp;
