import {
  ContinuedEvent,
  DebugSession,
  ExitedEvent,
  InitializedEvent,
  OutputEvent,
  TerminatedEvent,
  Thread,
} from "@vscode/debugadapter";
import type { DebugProtocol } from "@vscode/debugprotocol";

import type { StaticJsSyntaxError } from "@suntime-js/core";

import { toDapBreakpoint } from "../dap/toDapBreakpoint.js";
import { toDapStackFrame } from "../dap/toDapStackFrame.js";
import { toDapStoppedEvent } from "../dap/toDapStoppedEvent.js";

import {
  createAdapterSession,
  type CreatedAdapterSession,
} from "../session/createAdapterSession.js";
import { createAdapterSessionState } from "../session/AdapterSessionState.js";

import {
  normalizeLaunchRequestArguments,
  type NormalizedStaticJsLaunchRequestArguments,
  type StaticJsLaunchRequestArguments,
} from "./StaticJsLaunchRequestArguments.js";
import { StaticJsDebugAdapterErrorCode } from "./StaticJsDebugAdapterErrorCode.js";

const MAIN_THREAD_ID = 1;

export class StaticJsDebugAdapter extends DebugSession {
  public static readonly debuggerType = "staticjs";

  private readonly _sessionState = createAdapterSessionState();

  public constructor() {
    super();
    this.setDebuggerLinesStartAt1(true);
    this.setDebuggerColumnsStartAt1(false);
  }

  protected override initializeRequest(
    response: DebugProtocol.InitializeResponse,
    _args: DebugProtocol.InitializeRequestArguments,
  ): void {
    response.body = {
      supportsConfigurationDoneRequest: true,
      supportsTerminateRequest: true,
    };

    this.sendResponse(response);
    this.sendEvent(new InitializedEvent());
  }

  protected override launchRequest(
    response: DebugProtocol.LaunchResponse,
    args: StaticJsLaunchRequestArguments,
  ): void {
    const launchArgs = this._createLaunchSession(response, args, "Launch");
    if (launchArgs === null) {
      return;
    }

    this._sessionState.launchArgs = launchArgs;
    this.sendResponse(response);
    void this._startSessionIfReady();
  }

  protected override attachRequest(
    response: DebugProtocol.AttachResponse,
    _args: StaticJsLaunchRequestArguments,
  ): void {
    this._sendNotSupported(response, StaticJsDebugAdapterErrorCode.UnsupportedAttach, "attach is");
  }

  protected override configurationDoneRequest(
    response: DebugProtocol.ConfigurationDoneResponse,
    _args: DebugProtocol.ConfigurationDoneArguments,
  ): void {
    this._sessionState.configurationDone = true;
    this.sendResponse(response);
    void this._startSessionIfReady();
  }

  protected override setBreakPointsRequest(
    response: DebugProtocol.SetBreakpointsResponse,
    args: DebugProtocol.SetBreakpointsArguments,
  ): void {
    const sourceName = this._getSourceNameFromDapSource(args.source);
    const lines = args.breakpoints?.map((breakpoint) => breakpoint.line) ?? args.lines ?? [];
    const debugSession = this._sessionState.debugSession;

    if (debugSession && sourceName) {
      debugSession.setBreakpoints(sourceName, lines);

      response.body = {
        breakpoints: lines.map((line) => {
          const breakpoint = debugSession.breakpoints.find(
            (candidate) => candidate.sourceName === sourceName && candidate.line === line,
          );

          return toDapBreakpoint(line, Boolean(breakpoint?.verified));
        }),
      };

      this.sendResponse(response);
      return;
    }

    response.body = {
      breakpoints: lines.map((line) => toDapBreakpoint(line, false)),
    };

    this.sendResponse(response);
  }

  protected override setExceptionBreakPointsRequest(
    response: DebugProtocol.SetExceptionBreakpointsResponse,
    _args: DebugProtocol.SetExceptionBreakpointsArguments,
  ): void {
    this._sendNotSupported(
      response,
      StaticJsDebugAdapterErrorCode.UnsupportedExceptionBreakpoints,
      "exception breakpoints are",
    );
  }

  protected override threadsRequest(response: DebugProtocol.ThreadsResponse): void {
    response.body = {
      threads: [new Thread(MAIN_THREAD_ID, "Main Thread")],
    };

    this.sendResponse(response);
  }

  protected override stackTraceRequest(
    response: DebugProtocol.StackTraceResponse,
    _args: DebugProtocol.StackTraceArguments,
  ): void {
    const frames = this._sessionState.debugSession?.getStack() ?? [];

    response.body = {
      stackFrames: frames.map((frame, index) => toDapStackFrame(frame, index + 1)),
      totalFrames: frames.length,
    };

    this.sendResponse(response);
  }

  protected override scopesRequest(
    response: DebugProtocol.ScopesResponse,
    _args: DebugProtocol.ScopesArguments,
  ): void {
    this._sendNotSupported(response, StaticJsDebugAdapterErrorCode.UnsupportedScopes, "scopes are");
  }

  protected override variablesRequest(
    response: DebugProtocol.VariablesResponse,
    _args: DebugProtocol.VariablesArguments,
  ): void {
    this._sendNotSupported(
      response,
      StaticJsDebugAdapterErrorCode.UnsupportedVariables,
      "variables are",
    );
  }

  protected override evaluateRequest(
    response: DebugProtocol.EvaluateResponse,
    _args: DebugProtocol.EvaluateArguments,
  ): void {
    this._sendNotSupported(
      response,
      StaticJsDebugAdapterErrorCode.UnsupportedEvaluate,
      "evaluate is",
    );
  }

  protected override pauseRequest(
    response: DebugProtocol.PauseResponse,
    _args: DebugProtocol.PauseArguments,
  ): void {
    if (!this._sessionState.debugSession) {
      this.sendErrorResponse(
        response,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    this._sessionState.debugSession.pause();
    this.sendResponse(response);
  }

  protected override nextRequest(
    response: DebugProtocol.NextResponse,
    args: DebugProtocol.NextArguments,
  ): void {
    const debugSession = this._sessionState.debugSession;
    if (!debugSession) {
      this.sendErrorResponse(
        response,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    try {
      void debugSession.next();
    } catch (error) {
      this.sendErrorResponse(
        response,
        StaticJsDebugAdapterErrorCode.DebugControlFailed,
        this._getErrorMessage(error),
      );
      return;
    }

    this.sendResponse(response);
    this.sendEvent(new ContinuedEvent(args.threadId ?? MAIN_THREAD_ID, true));
  }

  protected override stepInRequest(
    response: DebugProtocol.StepInResponse,
    _args: DebugProtocol.StepInArguments,
  ): void {
    this._sendNotSupported(response, StaticJsDebugAdapterErrorCode.UnsupportedStepIn, "stepIn is");
  }

  protected override stepOutRequest(
    response: DebugProtocol.StepOutResponse,
    _args: DebugProtocol.StepOutArguments,
  ): void {
    this._sendNotSupported(
      response,
      StaticJsDebugAdapterErrorCode.UnsupportedStepOut,
      "stepOut is",
    );
  }

  protected override continueRequest(
    response: DebugProtocol.ContinueResponse,
    args: DebugProtocol.ContinueArguments,
  ): void {
    const debugSession = this._sessionState.debugSession;
    if (!debugSession) {
      this.sendErrorResponse(
        response,
        StaticJsDebugAdapterErrorCode.NoActiveSession,
        "No active StaticJs debug session.",
      );
      return;
    }

    try {
      void debugSession.continue();
    } catch (error) {
      this.sendErrorResponse(
        response,
        StaticJsDebugAdapterErrorCode.DebugControlFailed,
        this._getErrorMessage(error),
      );
      return;
    }

    response.body = {
      allThreadsContinued: true,
    };

    this.sendResponse(response);
    this.sendEvent(new ContinuedEvent(args.threadId ?? MAIN_THREAD_ID, true));
  }

  protected override terminateRequest(
    response: DebugProtocol.TerminateResponse,
    _args: DebugProtocol.TerminateArguments,
  ): void {
    this._sessionState.debugSession?.terminate();
    this.sendResponse(response);
  }

  protected override disconnectRequest(
    response: DebugProtocol.DisconnectResponse,
    _args: DebugProtocol.DisconnectArguments,
  ): void {
    this._sessionState.debugSession?.terminate();
    this.sendResponse(response);
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

    this.sendEvent(
      new OutputEvent(
        `StaticJs debug adapter bootstrap active for ${launchArgs.sourceName} (${launchArgs.sourceKind}).\n`,
        "console",
      ),
    );

    try {
      await debugSession.start();
    } catch (error) {
      this.sendEvent(new OutputEvent(`${this._getErrorMessage(error)}\n`, "stderr"));
      this._finishSession(1);
    }
  }

  private _createLaunchSession(
    response: DebugProtocol.Response,
    args: StaticJsLaunchRequestArguments,
    requestName: "Launch" | "Attach",
  ): NormalizedStaticJsLaunchRequestArguments | null {
    const launchArgs = normalizeLaunchRequestArguments(args);
    if (launchArgs === null) {
      this.sendErrorResponse(
        response,
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
          this.sendEvent(toDapStoppedEvent(event, MAIN_THREAD_ID));
        },
        onDidTerminate: (event) => {
          if (event.reason === "error" && event.error) {
            this.sendEvent(new OutputEvent(`${this._getErrorMessage(event.error)}\n`, "stderr"));
          }

          this._finishSession(event.reason === "error" ? 1 : 0);
        },
      });

      this._setAdapterSession(adapterSession);
    } catch (error) {
      this.sendErrorResponse(
        response,
        StaticJsDebugAdapterErrorCode.FailedToCreateSession,
        this._getErrorMessage(error),
      );
      return null;
    }

    return launchArgs;
  }

  private _setAdapterSession(adapterSession: CreatedAdapterSession): void {
    this._sessionState.debugSession = adapterSession.debugSession;
    this._sessionState.disposeDebugSessionListeners = adapterSession.disposeListeners;
  }

  private _getSourceNameFromDapSource(source: DebugProtocol.Source | undefined): string | null {
    if (typeof source?.path === "string" && source.path.length > 0) {
      return source.path;
    }

    if (typeof source?.name === "string" && source.name.length > 0) {
      return source.name;
    }

    return this._sessionState.launchArgs?.sourceName ?? null;
  }

  private _getErrorMessage(error: unknown): string {
    if (isStaticJsSyntaxError(error)) {
      return error.message;
    }

    if (error instanceof Error) {
      return error.message;
    }

    return "StaticJs debug adapter request failed.";
  }

  private _sendNotSupported(
    response: DebugProtocol.Response,
    code: StaticJsDebugAdapterErrorCode,
    featureClause: string,
  ): void {
    this.sendErrorResponse(response, code, `StaticJs ${featureClause} not supported yet.`);
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
    this.sendEvent(new ExitedEvent(exitCode));
    this.sendEvent(new TerminatedEvent());
  }
}

function isStaticJsSyntaxError(error: unknown): error is StaticJsSyntaxError {
  return error instanceof Error && error.name === "StaticJsSyntaxError";
}
