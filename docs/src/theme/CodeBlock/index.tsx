import type { WrapperProps } from "@docusaurus/types";
import type CodeBlockType from "@theme/CodeBlock";

import BrowserOnly from "@docusaurus/BrowserOnly";
import CodeBlock from "@theme-original/CodeBlock";
import React, { lazy, Suspense, type ReactNode } from "react";

const SuntimeCodeBlock = lazy(() => import("./SuntimeCodeBlock"));

type Props = WrapperProps<typeof CodeBlockType>;

/**
 * MDX passes the fenced-code language as a `language-<lang>` className rather
 * than the `language` prop, so fall back to parsing the className.
 */
function getLanguage(props: Props): string | undefined {
  if (props.language) return props.language;
  return props.className
    ?.split(/\s+/)
    .map((cls) => /^language-(.+)$/.exec(cls)?.[1])
    .find(Boolean);
}

export default function CodeBlockWrapper(props: Props): ReactNode {
  const tags = props.metastring?.split(" ") ?? [];
  if (tags.includes("live-staticjs")) {
    const language = getLanguage(props);
    return (
      <BrowserOnly fallback={<CodeBlock {...props} />}>
        {() => (
          <Suspense fallback={<CodeBlock {...props} />}>
            <SuntimeCodeBlock
              {...props}
              exposeStaticJs={tags.includes("include-runtime")}
              typescript={language === "tsx" || language === "ts"}
            />
          </Suspense>
        )}
      </BrowserOnly>
    );
  }

  return <CodeBlock {...props} />;
}
