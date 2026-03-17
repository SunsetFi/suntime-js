import {
  MONACO_VSCODE_ENTRY_FILE_PATH,
  MONACO_VSCODE_LAUNCH_CONFIG_PATH,
  MONACO_VSCODE_WORKSPACE_PATH,
} from "@/monaco-vscode/config/defaultPaths";
import type { MonacoVscodeWorkspaceDescriptor } from "@/monaco-vscode/types/MonacoVscodeBootstrap";

const defaultSource = `// Write your JavaScript code here
console.log("Hello, world!");
`;

const defaultLaunchConfig = JSON.stringify(
  {
    version: "0.2.0",
    configurations: [
      {
        type: "staticjs",
        name: "Debug Sandbox Program",
        request: "launch",
        program: MONACO_VSCODE_ENTRY_FILE_PATH,
      },
    ],
  },
  null,
  2,
);

export function createSandboxWorkspace(
  source: string = defaultSource,
): MonacoVscodeWorkspaceDescriptor {
  return {
    workspacePath: MONACO_VSCODE_WORKSPACE_PATH,
    entryFilePath: MONACO_VSCODE_ENTRY_FILE_PATH,
    files: [
      {
        path: MONACO_VSCODE_ENTRY_FILE_PATH,
        contents: source,
        language: "javascript",
      },
      {
        path: MONACO_VSCODE_LAUNCH_CONFIG_PATH,
        contents: defaultLaunchConfig,
        language: "json",
      },
    ],
  };
}
