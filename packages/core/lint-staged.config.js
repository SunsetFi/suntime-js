import { lintStagedWorkspaceCommand } from "../../workspace-utils.js";

export default {
  "*.ts": [
    lintStagedWorkspaceCommand("@suntime-js/core", "format"),
    lintStagedWorkspaceCommand("@suntime-js/core", "lint"),
    () => "pnpm run --filter @suntime-js/core check",
  ],
};
