import { lintStagedWorkspaceCommand } from "../../workspace-utils.mjs";

export default {
  "*.ts": [
    lintStagedWorkspaceCommand("@suntime-js/debugger", "format"),
    lintStagedWorkspaceCommand("@suntime-js/debugger", "lint"),
    () => "pnpm run --filter @suntime-js/debugger check",
  ],
};
