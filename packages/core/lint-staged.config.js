import { lintStagedWorkspaceCommand } from "../../workspace-utils.mjs";

const tsLint = [
  lintStagedWorkspaceCommand("@suntime-js/core", "format"),
  lintStagedWorkspaceCommand("@suntime-js/core", "lint"),
  () => "pnpm run --filter @suntime-js/core check",
];
export default {
  "src/**/*.ts": tsLint,
  "!(tests/test262/tests/**/*)/**/*.ts": tsLint,
};
