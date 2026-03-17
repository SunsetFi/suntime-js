import * as monaco from "monaco-editor";

import {
  RegisteredFileSystemProvider,
  RegisteredMemoryFile,
  registerFileSystemOverlay,
} from "@codingame/monaco-vscode-files-service-override";

import type { MonacoVscodeWorkspaceDescriptor } from "@/monaco-vscode/types/MonacoVscodeBootstrap";

export function registerWorkspaceOverlay(workspace: MonacoVscodeWorkspaceDescriptor) {
  const provider = new RegisteredFileSystemProvider(false);

  for (const file of workspace.files) {
    provider.registerFile(new RegisteredMemoryFile(monaco.Uri.file(file.path), file.contents));
  }

  return registerFileSystemOverlay(1, provider);
}
