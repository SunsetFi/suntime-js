import { lintStagedWorkspaceCommand } from "../../workspace-utils.mjs";

export default {
  "*.ts": [
    lintStagedWorkspaceCommand("@suntime-js/dap", "format"),
    lintStagedWorkspaceCommand("@suntime-js/dap", "lint"),
    () => "pnpm run --filter @suntime-js/dap check",
  ],
};
