import { ExtensionHostKind, registerExtension } from "@codingame/monaco-vscode-api/extensions";
import { STATIC_JS_DEBUGGER_TYPE, createStaticJsWebDebugAdapter } from "@suntime-js/dap/web";
import type { StaticJsWebDebugAdapter } from "@suntime-js/dap/web";
import type * as vscode from "vscode";

import type { MonacoVscodeBootstrapContext } from "@/monaco-vscode/types/MonacoVscodeBootstrap";

const SANDBOX_DEBUG_EXTENSION_PATH = "/extension";
const SANDBOX_DEBUG_EXTENSION_ENTRYPOINT = "./extension.js";

let sandboxDebugRegistrationPromise: Promise<void> | null = null;
let sandboxVscodeApiPromise: Promise<typeof vscode> | null = null;
const sandboxDebugProtocolListeners = new Set<SandboxDebugProtocolListener>();

export interface SandboxDebugProtocolEnvelope {
  readonly sessionId: string;
  readonly message: vscode.DebugProtocolMessage;
}

export type SandboxDebugProtocolListener = (
  envelope: SandboxDebugProtocolEnvelope,
) => void;

interface StaticJsLaunchConfiguration extends vscode.DebugConfiguration {
  program?: string;
  sourceKind?: "script" | "expression" | "module";
  sourceName?: string;
  sourceText?: string;
}

function createInlineDebugAdapter(
  vscodeApi: typeof vscode,
  adapter: StaticJsWebDebugAdapter,
  sessionId: string,
): vscode.DebugAdapter {
  const emitter = new vscodeApi.EventEmitter<vscode.DebugProtocolMessage>();
  const unsubscribe = adapter.onDidSendMessage((message: unknown) => {
    emitSandboxDebugProtocolMessage({
      sessionId,
      message: message as vscode.DebugProtocolMessage,
    });
    emitter.fire(message as unknown as vscode.DebugProtocolMessage);
  });

  return {
    onDidSendMessage: emitter.event,
    handleMessage(message) {
      adapter.handleMessage(message as never);
    },
    dispose() {
      unsubscribe();
      emitter.dispose();
      adapter.dispose();
    },
  };
}

function emitSandboxDebugProtocolMessage(envelope: SandboxDebugProtocolEnvelope): void {
  for (const listener of sandboxDebugProtocolListeners) {
    listener(envelope);
  }
}

async function resolveLaunchConfiguration(
  vscodeApi: typeof vscode,
  entryFilePath: string,
  configuration: StaticJsLaunchConfiguration | undefined,
): Promise<StaticJsLaunchConfiguration> {
  const program = configuration?.program ?? entryFilePath;
  const sourceKind = configuration?.sourceKind ?? "script";
  const sourceName = configuration?.sourceName ?? program;

  let sourceText = configuration?.sourceText;
  if (!sourceText) {
    const document = await vscodeApi.workspace.openTextDocument(vscodeApi.Uri.file(program));
    sourceText = document.getText() || "\n";
  }

  return {
    name: configuration?.name ?? "Debug Sandbox Program",
    request: "launch",
    type: STATIC_JS_DEBUGGER_TYPE,
    ...configuration,
    program,
    sourceKind,
    sourceName,
    sourceText,
  };
}

export async function registerSandboxDebugExtension(
  context: MonacoVscodeBootstrapContext,
): Promise<void> {
  if (context.vscodeApi.enableSandboxDebugger === false) {
    return;
  }

  if (sandboxDebugRegistrationPromise) {
    return sandboxDebugRegistrationPromise;
  }

  sandboxDebugRegistrationPromise = (async () => {
    try {
      const extension = registerExtension(
        {
          name: "sandbox-debugger",
          publisher: "suntime-js",
          version: "0.0.0",
          engines: {
            vscode: "*",
          },
          browser: SANDBOX_DEBUG_EXTENSION_ENTRYPOINT,
          contributes: {
            debuggers: [
              {
                type: STATIC_JS_DEBUGGER_TYPE,
                label: "StaticJs Sandbox",
                languages: ["javascript"],
              },
            ],
            breakpoints: [
              {
                language: "javascript",
              },
            ],
          },
        },
        ExtensionHostKind.LocalProcess,
        {
          path: SANDBOX_DEBUG_EXTENSION_PATH,
        },
      );

      extension.registerFileUrl(
        SANDBOX_DEBUG_EXTENSION_ENTRYPOINT,
        `data:text/javascript;base64,${window.btoa("// sandbox debugger bootstrap\n")}`,
      );

      sandboxVscodeApiPromise = extension.getApi();
      const vscodeApi = await sandboxVscodeApiPromise;

      vscodeApi.debug.registerDebugConfigurationProvider(STATIC_JS_DEBUGGER_TYPE, {
        async resolveDebugConfiguration(_folder, configuration) {
          return await resolveLaunchConfiguration(
            vscodeApi,
            context.workspace.entryFilePath,
            configuration as StaticJsLaunchConfiguration | undefined,
          );
        },
      });

      vscodeApi.debug.registerDebugAdapterDescriptorFactory(STATIC_JS_DEBUGGER_TYPE, {
        async createDebugAdapterDescriptor(session) {
          const adapter = createStaticJsWebDebugAdapter(context.vscodeApi.sandboxDebugger);
          const inlineAdapter = createInlineDebugAdapter(vscodeApi, adapter, session.id);
          const configuration = session.configuration as StaticJsLaunchConfiguration;

          if (!configuration.sourceText || !configuration.sourceName || !configuration.sourceKind) {
            const resolvedConfiguration = await resolveLaunchConfiguration(
              vscodeApi,
              context.workspace.entryFilePath,
              configuration,
            );

            Object.assign(configuration, resolvedConfiguration);
          }

          return new vscodeApi.DebugAdapterInlineImplementation(inlineAdapter);
        },
      });
    } catch (error) {
      sandboxDebugRegistrationPromise = null;
      sandboxVscodeApiPromise = null;
      throw error;
    }
  })();

  return sandboxDebugRegistrationPromise;
}

export async function getSandboxVscodeApi(): Promise<typeof vscode> {
  if (!sandboxVscodeApiPromise) {
    throw new Error("Sandbox VS Code API is not registered yet.");
  }

  return sandboxVscodeApiPromise;
}

export function onDidReceiveSandboxDebugProtocolMessage(
  listener: SandboxDebugProtocolListener,
): () => void {
  sandboxDebugProtocolListeners.add(listener);

  return () => {
    sandboxDebugProtocolListeners.delete(listener);
  };
}
