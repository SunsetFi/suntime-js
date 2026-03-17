import React from "react";

import { MonacoVscodeContext } from "@/monaco-vscode/components/MonacoVscodeProvider";

export function useMonacoVscodeBootstrap() {
  const bootstrap = React.useContext(MonacoVscodeContext);

  if (!bootstrap) {
    throw new Error("useMonacoVscodeBootstrap must be used within a MonacoVscodeProvider.");
  }

  return bootstrap;
}
