import { ENTRY_FILE_PATH, LAUNCH_CONFIG_PATH, WORKSPACE_ROOT } from "../config/paths.js";
import type { WorkbenchWorkspace } from "../types/index.js";

const DEFAULT_SOURCE = `// Write your JavaScript code here
console.log("Hello, world!");
`;

const DEFAULT_LAUNCH_CONFIG = JSON.stringify(
  {
    version: "0.2.0",
    configurations: [
      {
        type: "staticjs",
        name: "Debug Sandbox Program",
        request: "launch",
        program: ENTRY_FILE_PATH,
      },
    ],
  },
  null,
  2,
);

export function createDefaultWorkspace(source: string = DEFAULT_SOURCE): WorkbenchWorkspace {
  return {
    workspacePath: WORKSPACE_ROOT,
    entryFilePath: ENTRY_FILE_PATH,
    files: [
      {
        path: ENTRY_FILE_PATH,
        contents: source,
        language: "javascript",
      },
      {
        path: LAUNCH_CONFIG_PATH,
        contents: DEFAULT_LAUNCH_CONFIG,
        language: "json",
      },
    ],
  };
}
