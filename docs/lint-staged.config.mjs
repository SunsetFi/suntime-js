import { lintStagedWorkspaceRunner } from "../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@suntime-js/docs");

const tsLint = [run("format"), run("lint"), () => "pnpm run --filter @suntime-js/docs typecheck"];
export default {
  "!(src/static/)**/*.ts": tsLint,
  "!(src/static/)": run("format"),
};
