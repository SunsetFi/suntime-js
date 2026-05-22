import { lintStagedWorkspaceRunner } from "../../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@suntime-js/docs");

const tsLint = [
  run("format"),
  run("lint"),
  () => "pnpm run --filter @suntime-js/docs check",
];
export default {
  "**/*.ts": tsLint,
  "!(src/static/playground-embed/**)": run("format"),
};
