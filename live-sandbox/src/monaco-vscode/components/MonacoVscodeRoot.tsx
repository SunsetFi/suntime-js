import React from "react";

import {
  MonacoVscodeBootstrap,
  monacoVscodeBootstrap,
} from "@/monaco-vscode/bootstrap";
import { InternalMonacoVscodeEditor } from "@/monaco-vscode/components/InternalMonacoVscodeEditor";
import { MonacoVscodeProvider } from "@/monaco-vscode/components/MonacoVscodeProvider";
import { MonacoVscodeSurface } from "@/monaco-vscode/components/MonacoVscodeSurface";
import { useObservation } from "@/hooks/use-observation";
import type {
  MonacoVscodeBootstrapOptions,
  MonacoVscodeEditorOptions,
  MonacoVscodeBootstrapSnapshot,
} from "@/monaco-vscode/types/MonacoVscodeBootstrap";

export interface MonacoVscodeRootRenderProps {
  readonly bootstrap: MonacoVscodeBootstrap;
  readonly snapshot: MonacoVscodeBootstrapSnapshot;
  readonly surfaceRef: React.RefObject<HTMLDivElement | null>;
}

export interface MonacoVscodeRootProps {
  readonly bootstrap?: MonacoVscodeBootstrap;
  readonly bootstrapOptions?: Omit<MonacoVscodeBootstrapOptions, "rootElement">;
  readonly children?: (props: MonacoVscodeRootRenderProps) => React.ReactNode;
  readonly editorOptions?: MonacoVscodeEditorOptions;
  readonly fallback?: React.ReactNode;
  readonly surfaceProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const MonacoVscodeRoot = ({
  bootstrap = monacoVscodeBootstrap,
  bootstrapOptions,
  children,
  editorOptions,
  fallback = null,
  surfaceProps,
}: MonacoVscodeRootProps) => {
  const surfaceRef = React.useRef<HTMLDivElement>(null);
  const snapshot =
    useObservation(bootstrap.snapshot$) ?? bootstrap.getSnapshot();

  React.useEffect(() => {
    void bootstrap.initialize({
      ...bootstrapOptions,
      rootElement: surfaceRef.current,
    });
  }, [bootstrap, bootstrapOptions]);

  return (
    <MonacoVscodeProvider bootstrap={bootstrap}>
      <MonacoVscodeSurface {...surfaceProps} ref={surfaceRef} />
      <InternalMonacoVscodeEditor
        surfaceRef={surfaceRef}
        snapshot={snapshot}
        options={editorOptions}
      />
      {children
        ? children({ bootstrap, snapshot, surfaceRef })
        : snapshot.status !== "ready"
          ? fallback
          : null}
    </MonacoVscodeProvider>
  );
};
