/**
 * Suntime-JS debug extension for Monaco workbench.
 *
 * Registers a debug adapter factory for the "staticjs" debug type.
 * This wires the @suntime-js/dap web adapter into VS Code's debug service
 * so that launch.json configurations of type "staticjs" run in the sandbox.
 *
 * Dependencies:
 *   - @suntime-js/dap  (workspace:*)
 *   - @suntime-js/core (workspace:*)
 *
 * These are already in package.json.  The extension is opt-in: pass
 * `api.enableDebugExtension: false` in WorkbenchBootstrapOptions to skip it.
 */

import { ExtensionHostKind, registerExtension } from "@codingame/monaco-vscode-api/extensions";
import { STATIC_JS_DEBUGGER_TYPE, createStaticJsWebDebugAdapter } from "@suntime-js/dap/web";
import type { StaticJsWebDebugAdapterOptions } from "@suntime-js/dap/web";
import type * as vscode from "vscode";

import type { WorkbenchBootstrapContext } from "../types/index.js";
import { createSandboxRealm } from "./createSandboxRealm.js";

const EXTENSION_VIRTUAL_PATH = "/extension";
const EXTENSION_ENTRYPOINT = "./extension.js";

// Lazily resolved after registration.
let _registrationPromise: Promise<void> | null = null;
let _vscodeApiPromise: Promise<typeof vscode> | null = null;

export interface DebugProtocolEnvelope {
  readonly sessionId: string;
  readonly message: vscode.DebugProtocolMessage;
}

export type DebugProtocolListener = (envelope: DebugProtocolEnvelope) => void;

const _protocolListeners = new Set<DebugProtocolListener>();

// ---- Launch configuration helpers ----

interface StaticJsLaunchConfig extends vscode.DebugConfiguration {
  program?: string;
  sourceKind?: "script" | "expression" | "module";
  sourceName?: string;
  sourceText?: string;
}

async function resolveLaunchConfig(
  api: typeof vscode,
  defaultProgram: string,
  config: StaticJsLaunchConfig | undefined,
): Promise<StaticJsLaunchConfig> {
  const program = config?.program ?? defaultProgram;
  const sourceKind = config?.sourceKind ?? "module";
  const sourceName = config?.sourceName ?? program;

  let sourceText = config?.sourceText;
  if (!sourceText) {
    const doc = await api.workspace.openTextDocument(api.Uri.file(program));
    sourceText = doc.getText() || "\n";
  }

  return {
    name: config?.name ?? "Debug Sandbox Program",
    request: "launch",
    type: STATIC_JS_DEBUGGER_TYPE,
    ...config,
    program,
    sourceKind,
    sourceName,
    sourceText,
  };
}

// ---- Inline debug adapter bridge ----

interface InlineAdapter extends vscode.DebugAdapter {
  /** Emit a DAP "output" event directly to VS Code (bypasses the adapter). */
  sendOutputEvent(text: string, category?: "console" | "stdout" | "stderr"): void;
}

let _outputSeq = 1;

function createInlineAdapter(
  api: typeof vscode,
  adapter: ReturnType<typeof createStaticJsWebDebugAdapter>,
  sessionId: string,
): InlineAdapter {
  const emitter = new api.EventEmitter<vscode.DebugProtocolMessage>();

  const unsubscribe = adapter.onDidSendMessage((message: unknown) => {
    const envelope: DebugProtocolEnvelope = {
      sessionId,
      message: message as vscode.DebugProtocolMessage,
    };
    for (const listener of _protocolListeners) {
      listener(envelope);
    }
    emitter.fire(message as vscode.DebugProtocolMessage);
  });

  return {
    onDidSendMessage: emitter.event,
    handleMessage(message) {
      adapter.handleMessage(message as never);
    },
    sendOutputEvent(text: string, category: "console" | "stdout" | "stderr" = "console") {
      emitter.fire({
        type: "event",
        event: "output",
        seq: _outputSeq++,
        body: { category, output: text + "\n" },
      } as vscode.DebugProtocolMessage);
    },
    dispose() {
      unsubscribe();
      emitter.dispose();
      adapter.dispose();
    },
  };
}

// ---- Public API ----

/**
 * Register the suntime-js debug extension.
 *
 * Called once during bootstrap.  Subsequent calls are no-ops and return the
 * same promise.
 *
 * @param context  Bootstrap context supplying the workspace entry file path.
 * @param adapterOptions  Optional realm/runner overrides forwarded to the DAP adapter.
 */
export async function registerDebugExtension(
  context: WorkbenchBootstrapContext,
  adapterOptions: StaticJsWebDebugAdapterOptions = {},
): Promise<void> {
  if (_registrationPromise) {
    return _registrationPromise;
  }

  _registrationPromise = (async () => {
    try {
      const extension = registerExtension(
        {
          name: "sandbox-debugger",
          publisher: "suntime-js",
          version: "0.0.0",
          engines: { vscode: "*" },
          browser: EXTENSION_ENTRYPOINT,
          contributes: {
            debuggers: [
              {
                type: STATIC_JS_DEBUGGER_TYPE,
                label: "StaticJS Sandbox",
                languages: ["javascript"],
              },
            ],
            breakpoints: [{ language: "javascript" }],
          },
        },
        ExtensionHostKind.LocalProcess,
        { path: EXTENSION_VIRTUAL_PATH },
      );

      // Provide a minimal bootstrap script for the extension entry point.
      extension.registerFileUrl(
        EXTENSION_ENTRYPOINT,
        `data:text/javascript;base64,${btoa("// suntime-js sandbox debugger bootstrap\n")}`,
      );

      _vscodeApiPromise = extension.getApi();
      const api = await _vscodeApiPromise;

      api.debug.registerDebugConfigurationProvider(STATIC_JS_DEBUGGER_TYPE, {
        async resolveDebugConfiguration(_folder, config) {
          return resolveLaunchConfig(
            api,
            context.workspace.entryFilePath,
            config as StaticJsLaunchConfig | undefined,
          );
        },
      });

      api.debug.registerDebugAdapterDescriptorFactory(STATIC_JS_DEBUGGER_TYPE, {
        async createDebugAdapterDescriptor(session) {
          const config = session.configuration as StaticJsLaunchConfig;

          // Ensure source text is resolved before creating the adapter.
          if (!config.sourceText || !config.sourceName || !config.sourceKind) {
            const resolved = await resolveLaunchConfig(
              api,
              context.workspace.entryFilePath,
              config,
            );
            Object.assign(config, resolved);
          }

          // `sendOutputEvent` is set once the inline adapter is created below.
          // The realm only executes after the session is fully started, so
          // there is no race: by the time console.log is called, the function
          // is already in place.
          let sendOutputEvent: InlineAdapter["sendOutputEvent"] = () => {};

          const adapter = createStaticJsWebDebugAdapter({
            ...adapterOptions,
            createRealm:
              adapterOptions.createRealm ??
              (() => createSandboxRealm((text) => sendOutputEvent(text))),
          });

          const inlineAdapter = createInlineAdapter(api, adapter, session.id);
          sendOutputEvent = inlineAdapter.sendOutputEvent.bind(inlineAdapter);

          return new api.DebugAdapterInlineImplementation(inlineAdapter);
        },
      });
    } catch (err) {
      _registrationPromise = null;
      _vscodeApiPromise = null;
      throw err;
    }
  })();

  return _registrationPromise;
}

/** Returns the vscode API surface exposed by the debug extension. */
export async function getDebugExtensionApi(): Promise<typeof vscode> {
  if (!_vscodeApiPromise) {
    throw new Error("Debug extension has not been registered yet.");
  }
  return _vscodeApiPromise;
}

/**
 * Subscribe to raw DAP protocol messages emitted by the debug adapter.
 * Useful for custom UI that wants to observe the debug session traffic.
 *
 * @returns Unsubscribe function.
 */
export function onDebugProtocolMessage(listener: DebugProtocolListener): () => void {
  _protocolListeners.add(listener);
  return () => _protocolListeners.delete(listener);
}
