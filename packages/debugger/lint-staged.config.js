import { lintStagedWorkspaceRunner } from "../../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@suntime-js/debugger");

export default {
  "*.ts": [
    run("format"),
    run("lint"),
    () => "pnpm run --filter @suntime-js/debugger check",
  ],
};
