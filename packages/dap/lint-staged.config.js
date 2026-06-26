import { lintStagedWorkspaceRunner } from "../../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@suntime-js/dap");

export default {
  "*.ts": [run("format"), run("lint"), () => "pnpm run --filter @suntime-js/dap typecheck"],
  "package.json": [run("format")],
};
