import React from "react";

import type {
  IReference,
  ITextFileEditorModel,
} from "@codingame/monaco-vscode-api/monaco";
import {
  createConfiguredEditor,
  createModelReference,
} from "@codingame/monaco-vscode-api/monaco";
import * as monaco from "monaco-editor";

import type {
  MonacoVscodeBootstrapSnapshot,
  MonacoVscodeEditorOptions,
} from "@/monaco-vscode/types/MonacoVscodeBootstrap";
import { useLatest } from "@/hooks/use-latest";

export interface InternalMonacoVscodeEditorProps {
  readonly surfaceRef: React.RefObject<HTMLDivElement | null>;
  readonly snapshot: MonacoVscodeBootstrapSnapshot;
  readonly options?: MonacoVscodeEditorOptions;
}

export const InternalMonacoVscodeEditor = ({
  surfaceRef,
  snapshot,
  options,
}: InternalMonacoVscodeEditorProps) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null,
  );
  const modelRef = React.useRef<IReference<ITextFileEditorModel> | null>(null);
  const onEntryFileChangeRef = useLatest(options?.onEntryFileChange);

  React.useEffect(() => {
    if (snapshot.status !== "ready" || !surfaceRef.current) {
      return;
    }

    const runtime = snapshot.runtime;
    if (!runtime) {
      return;
    }

    let disposed = false;
    let contentSubscription: monaco.IDisposable | undefined;

    void (async () => {
      const entryUri = monaco.Uri.file(runtime.workspace.entryFilePath);
      const createdModelRef = await createModelReference(entryUri);
      if (disposed) {
        createdModelRef.dispose();
        return;
      }

      const textModel = createdModelRef.object.textEditorModel;
      if (!textModel) {
        createdModelRef.dispose();
        throw new Error(`No text model available for '${entryUri.path}'.`);
      }

      const editor = createConfiguredEditor(surfaceRef.current!, {
        automaticLayout: true,
        minimap: { enabled: false },
        model: textModel,
        ...(options?.constructionOptions ?? {}),
      });

      contentSubscription = textModel.onDidChangeContent(() => {
        onEntryFileChangeRef.current?.(textModel.getValue());
      });

      onEntryFileChangeRef.current?.(textModel.getValue());

      editorRef.current = editor;
      modelRef.current = createdModelRef;
    })();

    return () => {
      disposed = true;
      contentSubscription?.dispose();
      editorRef.current?.dispose();
      modelRef.current?.dispose();
      editorRef.current = null;
      modelRef.current = null;
    };
  }, [options?.constructionOptions, snapshot, surfaceRef]);

  return null;
};
