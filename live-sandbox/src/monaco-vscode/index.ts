export { MonacoVscodeBootstrap, monacoVscodeBootstrap } from "@/monaco-vscode/bootstrap";

export { MonacoVscodeRoot } from "@/monaco-vscode/components/MonacoVscodeRoot";

export { createSandboxWorkspace } from "@/monaco-vscode/filesystem/createSandboxWorkspace";
export { useMonacoVscodeBootstrap } from "@/monaco-vscode/hooks/useMonacoVscodeBootstrap";
export type {
  MonacoVscodeApiOptions,
  MonacoVscodeBootstrapOptions,
  MonacoVscodeEditorOptions,
  MonacoVscodeBootstrapRuntime,
  MonacoVscodeBootstrapSnapshot,
  MonacoVscodeBootstrapStatus,
  MonacoVscodeBootstrapper,
  MonacoVscodeFileDescriptor,
  MonacoVscodeWorkspaceDescriptor,
  MonacoVscodeWorkerLoader,
  MonacoVscodeWorkerLoaderMap,
} from "@/monaco-vscode/types/MonacoVscodeBootstrap";
export {
  MONACO_VSCODE_ENTRY_FILE_PATH,
  MONACO_VSCODE_LAUNCH_CONFIG_PATH,
  MONACO_VSCODE_WORKSPACE_PATH,
} from "@/monaco-vscode/config/defaultPaths";
