import { lintStagedWorkspaceRunner } from "../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@suntime-js/docs");

const excludeStatic = (fn) => (paths) => {
  const filtered = paths.filter((path) => !path.includes("/static/"));
  return filtered.length > 0 ? fn(filtered) : "true";
};

const tsLint = [
  excludeStatic(run("format")),
  excludeStatic(run("lint")),
  () => "pnpm run --filter @suntime-js/docs typecheck",
];
export default {
  "*.ts": tsLint,
  "*": excludeStatic(run("format")),
};
