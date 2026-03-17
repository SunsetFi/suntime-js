import type { MonacoVscodeBootstrapContext } from "@/monaco-vscode/types/MonacoVscodeBootstrap";

export async function registerSandboxDebugExtension(
  context: MonacoVscodeBootstrapContext,
): Promise<void> {
  if (context.vscodeApi.enableSandboxDebugger === false) {
    return;
  }

  return;
}
