import { lintStagedWorkspaceRunner } from "../../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("live-sandbox");

const tsLint = [
  run("format"),
  run("lint"),
  () => "pnpm run --filter live-sandbox check",
];
export default {
  "src/**/*.ts": tsLint,
  "!(tests/test262/tests/**/*)tests/**/*.ts": tsLint,
};
