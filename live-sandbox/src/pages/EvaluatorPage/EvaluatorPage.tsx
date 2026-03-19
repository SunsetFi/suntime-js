import React from "react";
import type * as vscode from "vscode";
import { StaticJsRealm, createTimeSharingTaskRunner } from "@suntime-js/core";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { useObservation } from "@/hooks/use-observation";
import { MonacoVscodeRoot, createSandboxWorkspace } from "@/monaco-vscode";
import { monacoVscodeBootstrap } from "@/monaco-vscode/bootstrap";
import { MONACO_VSCODE_ENTRY_FILE_PATH } from "@/monaco-vscode/config/defaultPaths";
import {
  getSandboxVscodeApi,
  onDidReceiveSandboxDebugProtocolMessage,
} from "@/monaco-vscode/extensions/registerSandboxDebugExtension";
import EvaluatorOperationStatus, {
  type EvaluatorDebuggerState,
} from "./components/EvaluatorOperationStatus";
import {
  STATIC_JS_DEBUGGER_TYPE,
  StaticJsWebDebugAdapterOptions,
} from "@suntime-js/dap/web";

const defaultCode = `// Write your JavaScript code here
function doThing() {
  for (let i = 0; i < 5; i++) {
    console.log("Hello " + i);
  }
}

doThing();
`;

const MAIN_THREAD_ID = 1;
const initialDebuggerState: EvaluatorDebuggerState = {
  status: "unstarted",
  log: [],
  line: null,
  column: null,
  operationType: null,
  detail: null,
};

interface StackTraceResponseShape {
  readonly stackFrames?: Array<{
    readonly name?: string;
    readonly line?: number;
    readonly column?: number;
  }>;
}

interface DebugEventMessage {
  readonly type: "event";
  readonly event: string;
  readonly body?: {
    readonly output?: string;
    readonly category?: string;
    readonly exitCode?: number;
  };
}

function isDebugEventMessage(
  message: vscode.DebugProtocolMessage,
): message is DebugEventMessage {
  return (
    typeof message === "object" &&
    message !== null &&
    "type" in message &&
    "event" in message &&
    (message as { type?: unknown }).type === "event"
  );
}

function normalizeLogEntries(output: string): string[] {
  return output
    .split(/\r?\n/)
    .map((entry) => entry.trimEnd())
    .filter((entry) => entry.length > 0);
}

function formatConsoleArgument(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint" ||
    typeof value === "symbol" ||
    value == null
  ) {
    return String(value);
  }

  if (value instanceof Error) {
    return `${value.name}: ${value.message}`;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

const EvaluatorPage = () => {
  const [debuggerState, setDebuggerState] =
    React.useState<EvaluatorDebuggerState>(initialDebuggerState);
  const bootstrapSnapshot =
    useObservation(monacoVscodeBootstrap.snapshot$) ??
    monacoVscodeBootstrap.getSnapshot();
  const vscodeApiRef = React.useRef<typeof vscode | null>(null);
  const activeSessionRef = React.useRef<vscode.DebugSession | null>(null);
  const activeSessionIdRef = React.useRef<string | null>(null);
  const appendRuntimeLog = React.useCallback((args: readonly unknown[]) => {
    const message = args.map(formatConsoleArgument).join(" ");

    setDebuggerState((current) => ({
      ...current,
      log: [...current.log, message],
    }));
  }, []);
  const initialWorkspace = React.useMemo(
    () => createSandboxWorkspace(defaultCode),
    [],
  );
  const createSandboxRealm = React.useCallback(
    () =>
      StaticJsRealm({
        global: {
          value: {
            console: {
              log: (...args: unknown[]) => {
                appendRuntimeLog(args);
              },
              info: (...args: unknown[]) => {
                appendRuntimeLog(args);
              },
              warn: (...args: unknown[]) => {
                appendRuntimeLog(args);
              },
              error: (...args: unknown[]) => {
                appendRuntimeLog(args);
              },
            },
          },
        },
      }),
    [appendRuntimeLog],
  );
  const bootstrapOptions = React.useMemo(
    () => ({
      workspace: initialWorkspace,
      vscodeApi: {
        configurationDefaults: {
          "editor.minimap.enabled": false,
        },
        sandboxDebugger: {
          createRealm: createSandboxRealm,
          runTask: createTimeSharingTaskRunner({
            operationsPerIteration: 1000,
            yieldTime: (1 / 60) * 1000,
          }),
        } satisfies StaticJsWebDebugAdapterOptions,
      },
    }),
    [createSandboxRealm, initialWorkspace],
  );

  const refreshTopStackFrame = React.useCallback(
    async (session: vscode.DebugSession) => {
      try {
        const response = (await session.customRequest("stackTrace", {
          threadId: MAIN_THREAD_ID,
          startFrame: 0,
          levels: 1,
        })) as StackTraceResponseShape;
        const frame = response.stackFrames?.[0];

        setDebuggerState((current) => ({
          ...current,
          line: frame?.line ?? null,
          column: frame?.column ?? null,
          operationType: frame?.name ?? null,
        }));
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);

        setDebuggerState((current) => ({
          ...current,
          detail: message,
        }));
      }
    },
    [],
  );

  React.useEffect(() => {
    if (bootstrapSnapshot.status !== "ready") {
      return;
    }

    let disposed = false;
    let unsubscribeProtocol = () => {};
    const disposables: vscode.Disposable[] = [];

    void getSandboxVscodeApi().then((vscodeApi) => {
      if (disposed) {
        return;
      }

      vscodeApiRef.current = vscodeApi;
      activeSessionRef.current = vscodeApi.debug.activeDebugSession ?? null;
      activeSessionIdRef.current =
        vscodeApi.debug.activeDebugSession?.id ?? null;

      disposables.push(
        vscodeApi.debug.onDidStartDebugSession((session) => {
          activeSessionRef.current = session;
          activeSessionIdRef.current = session.id;
          setDebuggerState((current) => ({
            ...current,
            status: "running",
            detail: null,
          }));
        }),
      );

      disposables.push(
        vscodeApi.debug.onDidChangeActiveDebugSession((session) => {
          activeSessionRef.current = session ?? null;
          activeSessionIdRef.current = session?.id ?? null;
        }),
      );

      disposables.push(
        vscodeApi.debug.onDidTerminateDebugSession((session) => {
          if (activeSessionIdRef.current === session.id) {
            activeSessionRef.current = null;
            activeSessionIdRef.current = null;
          }

          setDebuggerState((current) => ({
            ...current,
            status: current.status === "error" ? "error" : "done",
            detail: current.detail ?? "Debug session ended",
          }));
        }),
      );

      unsubscribeProtocol = onDidReceiveSandboxDebugProtocolMessage(
        ({ sessionId, message }) => {
          if (
            sessionId !== activeSessionIdRef.current ||
            !isDebugEventMessage(message)
          ) {
            return;
          }

          const event = message;

          switch (event.event) {
            case "output": {
              const body = event.body;
              const entries = normalizeLogEntries(body?.output ?? "");
              if (entries.length === 0) {
                return;
              }

              setDebuggerState((current) => ({
                ...current,
                log: [...current.log, ...entries],
                detail:
                  body?.category === "stderr"
                    ? (entries[entries.length - 1] ?? current.detail)
                    : current.detail,
              }));
              return;
            }
            case "stopped": {
              setDebuggerState((current) => ({
                ...current,
                status: "paused",
                detail: null,
              }));

              const session = activeSessionRef.current;
              if (session) {
                void refreshTopStackFrame(session);
              }
              return;
            }
            case "continued": {
              setDebuggerState((current) => ({
                ...current,
                status: "running",
              }));
              return;
            }
            case "exited": {
              const body = event.body;
              if ((body?.exitCode ?? 0) !== 0) {
                setDebuggerState((current) => ({
                  ...current,
                  status: "error",
                  detail:
                    current.detail ??
                    `Debug session exited with code ${body?.exitCode}.`,
                }));
              }
              return;
            }
            case "terminated": {
              setDebuggerState((current) => ({
                ...current,
                status: current.status === "error" ? "error" : "done",
                detail: current.detail ?? "Debug session ended",
              }));
              return;
            }
            default:
              return;
          }
        },
      );
    });

    return () => {
      disposed = true;
      unsubscribeProtocol();
      for (const disposable of disposables) {
        disposable.dispose();
      }
    };
  }, [bootstrapSnapshot.status, refreshTopStackFrame]);

  const startDebugSession = React.useCallback(async (stopOnEntry: boolean) => {
    const vscodeApi = vscodeApiRef.current ?? (await getSandboxVscodeApi());
    vscodeApiRef.current = vscodeApi;

    if (activeSessionRef.current) {
      await vscodeApi.debug.stopDebugging(activeSessionRef.current);
    }

    activeSessionRef.current = null;
    activeSessionIdRef.current = null;
    setDebuggerState({
      ...initialDebuggerState,
      status: "starting",
      detail: stopOnEntry ? "Launching and stopping on entry" : null,
    });

    const started = await vscodeApi.debug.startDebugging(undefined, {
      name: stopOnEntry ? "Step Sandbox Program" : "Debug Sandbox Program",
      type: STATIC_JS_DEBUGGER_TYPE,
      request: "launch",
      program: MONACO_VSCODE_ENTRY_FILE_PATH,
      stopOnEntry,
    });

    if (!started) {
      setDebuggerState({
        ...initialDebuggerState,
        status: "error",
        detail: "Failed to start the sandbox debug session.",
      });
    }
  }, []);

  const sendDebugRequest = React.useCallback(async (command: string) => {
    const session = activeSessionRef.current;
    if (!session) {
      return;
    }

    await session.customRequest(command, {
      threadId: MAIN_THREAD_ID,
    });
  }, []);

  const status = debuggerState.status;
  const onAbort = React.useCallback(() => {
    const vscodeApi = vscodeApiRef.current;
    const session = activeSessionRef.current;

    if (!vscodeApi || !session) {
      setDebuggerState(initialDebuggerState);
      return;
    }

    void vscodeApi.debug.stopDebugging(session);
  }, []);

  const onRun = React.useCallback(() => {
    if (status === "paused" && activeSessionRef.current) {
      void sendDebugRequest("continue");
      return;
    }

    void startDebugSession(false);
  }, [sendDebugRequest, startDebugSession, status]);

  const onPause = React.useCallback(() => {
    if (status === "running") {
      void sendDebugRequest("pause");
    }
  }, [sendDebugRequest, status]);

  const onStep = React.useCallback(() => {
    if (status === "paused" && activeSessionRef.current) {
      void sendDebugRequest("next");
      return;
    }

    void startDebugSession(true);
  }, [sendDebugRequest, startDebugSession, status]);

  const active =
    status === "starting" || status === "running" || status === "paused";

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", height: "100vh", gap: 1 }}
    >
      <Box sx={{ width: "60vw", height: "100vh" }}>
        <MonacoVscodeRoot
          bootstrapOptions={bootstrapOptions}
          fallback={
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size="1.25rem" />
            </Box>
          }
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ px: 1, pt: 1 }}>
          This demo is configured to automatically adjust its execution rate to
          limit itself to 20% of a 60 fps frame, or 3.4 ms of execution time per
          every 16.67 ms interval.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, py: 1 }}>
          {status !== "running" && status !== "starting" && (
            <button onClick={onRun}>Run</button>
          )}
          {status === "running" && <button onClick={onPause}>Pause</button>}
          <button onClick={onStep}>Step</button>
          {active && <button onClick={onAbort}>Abort</button>}
        </Box>
        <EvaluatorOperationStatus state={debuggerState} />
      </Box>
    </Box>
  );
};

export default EvaluatorPage;
