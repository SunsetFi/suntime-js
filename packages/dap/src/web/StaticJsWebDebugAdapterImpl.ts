import type { DebugProtocol } from "@vscode/debugprotocol";

import { normalizeLaunchRequestArguments } from "../adapter/StaticJsLaunchRequestArguments.js";
import { StaticJsDebugAdapterErrorCode } from "../adapter/StaticJsDebugAdapterErrorCode.js";
import type { NormalizedStaticJsLaunchRequestArguments } from "../adapter/types/NormalizedStaticJsLaunchRequestArguments.js";
import type { StaticJsLaunchRequestArguments } from "../adapter/types/StaticJsLaunchRequestArguments.js";
import { toDapBreakpoint } from "../dap/toDapBreakpoint.js";
import { toDapStackFrame } from "../dap/toDapStackFrame.js";
import { toDapStoppedEvent } from "../dap/toDapStoppedEvent.js";
import {
  createAdapterSession,
  type CreatedAdapterSession,
} from "../session/createAdapterSession.js";
import { createAdapterSessionState } from "../session/AdapterSessionState.js";
import { getStaticJsDebugAdapterErrorMessage } from "../utils/getStaticJsDebugAdapterErrorMessage.js";
import { getSourceNameFromDapSource } from "./getSourceNameFromDapSource.js";
import { StaticJsWebDebugAdapterMessageBus } from "./StaticJsWebDebugAdapterMessageBus.js";
import type { StaticJsWebDebugAdapterOptions } from "./createStaticJsWebDebugAdapter.js";
import type { StaticJsWebDebugAdapter } from "./types/StaticJsWebDebugAdapter.js";
import type { StaticJsWebDebugAdapterMessageListener } from "./types/StaticJsWebDebugAdapterMessageListener.js";

const MAIN_THREAD_ID = 1;

export class StaticJsWebDebugAdapterImpl implements StaticJsWebDebugAdapter {
  private readonly _sessionState = createAdapterSessionState();
  private readonly _messageBus = new StaticJsWebDebugAdapterMessageBus();
  private _deferStoppedEvents = 0;
  private readonly _pendingStoppedEvents: DebugProtocol.StoppedEvent["body"][] = [];
  private _disposed = false;

  constructor(private readonly _options: StaticJsWebDebugAdapterOptions = {}) {}

  onDidSendMessage(listener: StaticJsWebDebugAdapterMessageListener): () => void {
    return this._messageBus.subscribe(listener);
  }

  handleMessage(message: DebugProtocol.ProtocolMessage): void {
    if (this._messageBus.disposed || message.type !== "request") {
      return;
    }

    const request = message as DebugProtocol.Request;

    switch (request.command) {
      case "initialize":
        this._handleInitializeRequest(request);
        return;
      case "launch":
        this._handleLaunchRequest(request);
        return;
      case "attach":
        this._emitNotSupported(
          request,
          StaticJsDebugAdapterErrorCode.UnsupportedAttach,
          "attach is",
        );
        return;
      case "configurationDone":
        this._handleConfigurationDoneRequest(request);
        return;
      case "setBreakpoints":
        this._handleSetBreakpointsRequest(request);
        return;
      case "setExceptionBreakpoints":
        this._emitNotSupported(
          request,
          StaticJsDebugAdapterErrorCode.UnsupportedExceptionBreakpoints,
          "exception breakpoints are",
        );
        return;
      case "threads":
        this._handleThreadsRequest(request);
        return;
      case "stackTrace":
        this._handleStackTraceRequest(request);
        return;
      case "scopes":
        this._emitNotSupported(
          request,
          StaticJsDebugAdapterErrorCode.UnsupportedScopes,
          "scopes are",
        );
        return;
      case "variables":
        this._emitNotSupported(
          request,
          StaticJsDebugAdapterErrorCode.UnsupportedVariables,
          "variables are",
        );
        return;
      case "evaluate":
        this._emitNotSupported(
          request,
          StaticJsDebugAdapterErrorCode.UnsupportedEvaluate,
          "evaluate is",
        );
        return;
      case "pause":
        this._handlePauseRequest(request);
        return;
      case "next":
        void this._handleNextRequest(request);
        return;
      case "stepIn":
        void this._handleStepInRequest(request);
        return;
      case "stepOut":
        void this._handleStepOutRequest(request);
        return;
      case "continue":
        void this._handleContinueRequest(request);
        return;
      case "terminate":
        this._sessionState.debugSession?.terminate();
        this._messageBus.emitResponse(request);
        return;
      case "disconnect":
        this._sessionState.debugSession?.terminate();
        this._messageBus.emitResponse(request);
        return;
      default:
        return;
    }
  }

  dispose(): void {
    if (this._messageBus.disposed) {
      return;
    }

    this._disposed = true;

    this._disposeCurrentSession();
    this._messageBus.dispose();
  }

  private _handleInitializeRequest(request: DebugProtocol.Request): void {
    this._messageBus.emitResponse<DebugProtocol.InitializeResponse>(request, {
      supportsConfigurationDoneRequest: true,
      supportsTerminateRequest: true,
    });
    this._messageBus.emitEvent("initialized");
  }

  private _handleLaunchRequest(request: DebugProtocol.Request): void {
    const launchArgs = this._createLaunchSession(
      request,
      request.arguments as StaticJsLaunchRequestArguments,
      "Launch",
    );
    if (launchArgs === null) {
      return;
    }

    this._sessionState.launchArgs = launchArgs;
    this._messageBus.emitResponse(request);
    void this._startSessionIfReady();
  }

  private _handleConfigurationDoneRequest(request: DebugProtocol.Request): void {
    this._sessionState.configurationDone = true;
    this._messageBus.emitResponse(request);
    void this._startSessionIfReady();
  }

  private _handleSetBreakpointsRequest(request: DebugProtocol.Request): void {
    const args = request.arguments as DebugProtocol.SetBreakpointsArguments;
    const sourceName = getSourceNameFromDapSource(args.source, this._sessionState);
    const lines = args.breakpoints?.map((breakpoint) => breakpoint.line) ?? args.lines ?? [];
    const debugSession = this._sessionState.debugSession;

    if (debugSession && sourceName) {
      debugSession.setBreakpoints(sourceName, lines);

      this._messageBus.emitResponse<DebugProtocol.SetBreakpointsResponse>(request, {
        breakpoints: lines.map((line) => {
          const breakpoint = debugSession.breakpoints.find(
            (candidate) => candidate.sourceName === sourceName && candidate.line === line,
          );

          return toDapBreakpoint(line, Boolean(breakpoint?.verified));
        }),
      });
      return;
    }

    this._messageBus.emitResponse<DebugProtocol.SetBreakpointsResponse>(request, {
      breakpoints: lines.map((line) => toDapBreakpoint(line, false)),
    });
  }

  private _handleThreadsRequest(request: DebugProtocol.Request): void {
    this._messageBus.emitResponse<DebugProtocol.ThreadsResponse>(request, {
      threads: [
        {
          id: MAIN_THREAD_ID,
          name: "Main Thread",
        },
      ],
    });
  }

  private _handleStackTraceRequest(request: DebugProtocol.Request): void {
    const frames = this._sessionState.debugSession?.getStack() ?? [];

    this._messageBus.emitResponse<DebugProtocol.StackTraceResponse>(request, {
      stackFrames: frames.map((frame, index) => toDapStackFrame(frame, index + 1)),
      totalFrames: frames.length,
    });
  }

  private _handlePauseRequest(request: DebugProtocol.Request): void {
    if (!this._sessionState.debugSession) {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    this._sessionState.debugSession.pause();
    this._messageBus.emitResponse(request);
  }

  private async _handleNextRequest(request: DebugProtocol.Request): Promise<void> {
    const debugSession = this._sessionState.debugSession;
    if (!debugSession) {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    try {
      this._beginStoppedEventDeferral();
      await debugSession.stepOver();
    } catch (error) {
      this._endStoppedEventDeferral();
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.DebugControlFailed,
        getStaticJsDebugAdapterErrorMessage(error),
      );
      return;
    }

    this._messageBus.emitResponse(request);
    this._messageBus.emitEvent("continued", {
      allThreadsContinued: true,
      threadId:
        (request.arguments as DebugProtocol.NextArguments | undefined)?.threadId ?? MAIN_THREAD_ID,
    });
    this._endStoppedEventDeferral();
  }

  private async _handleStepInRequest(request: DebugProtocol.Request): Promise<void> {
    const debugSession = this._sessionState.debugSession;
    if (!debugSession) {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    try {
      this._beginStoppedEventDeferral();
      await debugSession.stepInto();
    } catch (error) {
      this._endStoppedEventDeferral();
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.DebugControlFailed,
        getStaticJsDebugAdapterErrorMessage(error),
      );
      return;
    }

    this._messageBus.emitResponse(request);
    this._messageBus.emitEvent("continued", {
      allThreadsContinued: true,
      threadId:
        (request.arguments as DebugProtocol.StepInArguments | undefined)?.threadId ??
        MAIN_THREAD_ID,
    });
    this._endStoppedEventDeferral();
  }

  private async _handleStepOutRequest(request: DebugProtocol.Request): Promise<void> {
    const debugSession = this._sessionState.debugSession;
    if (!debugSession) {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    try {
      this._beginStoppedEventDeferral();
      await debugSession.stepOut();
    } catch (error) {
      this._endStoppedEventDeferral();
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.DebugControlFailed,
        getStaticJsDebugAdapterErrorMessage(error),
      );
      return;
    }

    this._messageBus.emitResponse(request);
    this._messageBus.emitEvent("continued", {
      allThreadsContinued: true,
      threadId:
        (request.arguments as DebugProtocol.StepOutArguments | undefined)?.threadId ??
        MAIN_THREAD_ID,
    });
    this._endStoppedEventDeferral();
  }

  private async _handleContinueRequest(request: DebugProtocol.Request): Promise<void> {
    const debugSession = this._sessionState.debugSession;
    if (!debugSession) {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    try {
      this._beginStoppedEventDeferral();
      await debugSession.continue();
    } catch (error) {
      this._endStoppedEventDeferral();
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.DebugControlFailed,
        getStaticJsDebugAdapterErrorMessage(error),
      );
      return;
    }

    this._messageBus.emitResponse<DebugProtocol.ContinueResponse>(request, {
      allThreadsContinued: true,
    });
    this._messageBus.emitEvent("continued", {
      allThreadsContinued: true,
      threadId:
        (request.arguments as DebugProtocol.ContinueArguments | undefined)?.threadId ??
        MAIN_THREAD_ID,
    });
    this._endStoppedEventDeferral();
  }

  private _beginStoppedEventDeferral(): void {
    this._deferStoppedEvents++;
  }

  private _endStoppedEventDeferral(): void {
    if (this._deferStoppedEvents === 0) {
      return;
    }

    this._deferStoppedEvents--;
    if (this._deferStoppedEvents !== 0) {
      return;
    }

    while (this._pendingStoppedEvents.length > 0) {
      this._messageBus.emitEvent("stopped", this._pendingStoppedEvents.shift());
    }
  }

  private _emitStoppedEvent(body: DebugProtocol.StoppedEvent["body"]): void {
    if (this._deferStoppedEvents > 0) {
      this._pendingStoppedEvents.push(body);
      return;
    }

    // monaco-vscode-api does not detect stop events if they happen
    // synchronously.
    setTimeout(() => {
      if (this._disposed) {
        return;
      }

      this._messageBus.emitEvent("stopped", body);
    }, 0);
  }

  private _emitNotSupported(
    request: DebugProtocol.Request,
    code: StaticJsDebugAdapterErrorCode,
    featureClause: string,
  ): void {
    this._messageBus.emitErrorResponse(
      request,
      code,
      `StaticJs ${featureClause} not supported yet.`,
    );
  }

  private async _startSessionIfReady(): Promise<void> {
    const { debugSession, launchArgs } = this._sessionState;

    if (
      this._sessionState.launched ||
      !launchArgs ||
      !this._sessionState.configurationDone ||
      !debugSession
    ) {
      return;
    }

    this._sessionState.launched = true;

    try {
      await debugSession.start();
    } catch (error) {
      this._messageBus.emitEvent("output", {
        category: "stderr",
        output: `${getStaticJsDebugAdapterErrorMessage(error)}\n`,
      });
      this._finishSession(1);
    }
  }

  private _createLaunchSession(
    request: DebugProtocol.Request,
    args: StaticJsLaunchRequestArguments,
    requestName: "Launch" | "Attach",
  ): NormalizedStaticJsLaunchRequestArguments | null {
    if (requestName === "Attach") {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.UnsupportedAttach,
        "attach is not supported.",
      );
      return null;
    }

    const launchArgs = normalizeLaunchRequestArguments(args);
    if (launchArgs === null) {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.InvalidLaunchRequest,
        `${requestName} request must include non-empty sourceText and sourceKind fields.`,
      );
      return null;
    }

    this._disposeCurrentSession();
    this._sessionState.configurationDone = false;
    this._sessionState.launched = false;
    this._sessionState.terminated = false;

    try {
      const adapterSession = createAdapterSession({
        launchArgs,
        onDidStop: (event) => {
          const stoppedEvent = toDapStoppedEvent(event, MAIN_THREAD_ID);
          this._emitStoppedEvent(stoppedEvent.body);
        },
        onDidTerminate: (event) => {
          if (event.reason === "error" && event.error) {
            this._messageBus.emitEvent("output", {
              category: "stderr",
              output: `${getStaticJsDebugAdapterErrorMessage(event.error)}\n`,
            });
          }

          this._finishSession(event.reason === "error" ? 1 : 0);
        },
        realm: this._options.realm,
        createRealm: this._options.createRealm,
        runTask: this._options.runTask,
      });

      this._setAdapterSession(adapterSession);
    } catch (error) {
      this._messageBus.emitErrorResponse(
        request,
        StaticJsDebugAdapterErrorCode.FailedToCreateSession,
        getStaticJsDebugAdapterErrorMessage(error),
      );
      return null;
    }

    return launchArgs;
  }

  private _setAdapterSession(adapterSession: CreatedAdapterSession): void {
    this._sessionState.debugSession = adapterSession.debugSession;
    this._sessionState.disposeDebugSessionListeners = adapterSession.disposeListeners;
  }

  private _disposeCurrentSession(): void {
    for (const disposeListener of this._sessionState.disposeDebugSessionListeners) {
      disposeListener();
    }

    this._sessionState.disposeDebugSessionListeners = [];
    this._sessionState.debugSession = null;
  }

  private _finishSession(exitCode = 0): void {
    if (this._sessionState.terminated) {
      return;
    }

    this._sessionState.terminated = true;
    this._disposeCurrentSession();
    this._messageBus.emitEvent("exited", {
      exitCode,
    });
    this._messageBus.emitEvent("terminated", {});
  }
}
