import { lintStagedWorkspaceRunner } from "../../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@suntime-js/core");

const tsLint = [
  run("format"),
  run("lint"),
  () => "pnpm run --filter @suntime-js/core typecheck",
];
export default {
  "src/**/*.ts": tsLint,
  "!(tests/test262/tests/**/*)tests/**/*.ts": tsLint,
};
