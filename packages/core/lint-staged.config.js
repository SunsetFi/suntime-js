import { lintStagedWorkspaceCommand } from "../../workspace-utils.mjs";

export default {
  "*.ts": [
    lintStagedWorkspaceCommand("@suntime-js/core", "format"),
    lintStagedWorkspaceCommand("@suntime-js/core", "lint"),
    () => "pnpm run --filter @suntime-js/core check",
  ],
};
