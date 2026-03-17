import React from "react";

import type { MonacoVscodeBootstrap } from "@/monaco-vscode/bootstrap";

const MonacoVscodeContext = React.createContext<MonacoVscodeBootstrap | null>(
  null,
);

export interface MonacoVscodeProviderProps {
  readonly bootstrap: MonacoVscodeBootstrap;
  readonly children: React.ReactNode;
}

export const MonacoVscodeProvider = ({
  bootstrap,
  children,
}: MonacoVscodeProviderProps) => {
  return (
    <MonacoVscodeContext.Provider value={bootstrap}>
      {children}
    </MonacoVscodeContext.Provider>
  );
};

export { MonacoVscodeContext };
