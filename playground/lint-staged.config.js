import { lintStagedWorkspaceRunner } from "../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@suntime-js/playground");

const tsLint = [
  run("format"),
  run("lint"),
  () => "pnpm run --filter @suntime-js/playground typecheck",
];
export default {
  "src/**/*.{ts,tsx}": tsLint,
};
