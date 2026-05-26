import type { WrapperProps } from "@docusaurus/types";
import type CodeBlockType from "@theme/CodeBlock";

import BrowserOnly from "@docusaurus/BrowserOnly";
import CodeBlock from "@theme-original/CodeBlock";
import React, { lazy, Suspense, type ReactNode } from "react";

const SuntimeCodeBlock = lazy(() => import("./SuntimeCodeBlock"));

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): ReactNode {
  const tags = props.metastring?.split(" ") ?? [];
  if (tags.includes("live-staticjs")) {
    return (
      <BrowserOnly fallback={<CodeBlock {...props} />}>
        {() => (
          <Suspense fallback={<CodeBlock {...props} />}>
            <SuntimeCodeBlock {...props} />
          </Suspense>
        )}
      </BrowserOnly>
    );
  }

  return <CodeBlock {...props} />;
}
