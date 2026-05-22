import type { WrapperProps } from "@docusaurus/types";
import type CodeBlockType from "@theme/CodeBlock";

import CodeBlock from "@theme-original/CodeBlock";
import React, { type ReactNode } from "react";

import SuntimeCodeBlock from "./SuntimeCodeBlock";

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): ReactNode {
  const tags = props.metastring?.split(" ") ?? [];
  console.log("tags", tags);
  if (tags.includes("live-staticjs")) {
    return <SuntimeCodeBlock {...props} />;
  }

  // TODO: implement full-access properties in @suntime-js/core and use it
  // to self-host its own example code.
  // if (tags.includes("live")) {
  //   return <SuntimeCodeBlock {...props} />;
  // }

  return <CodeBlock {...props} />;
}
