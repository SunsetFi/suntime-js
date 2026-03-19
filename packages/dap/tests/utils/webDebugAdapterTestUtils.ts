import type { DebugProtocol } from "@vscode/debugprotocol";

import type { StaticJsLaunchRequestArguments } from "../../src";
import {
  STATIC_JS_DEBUGGER_TYPE,
  createStaticJsWebDebugAdapter,
  type StaticJsWebDebugAdapter,
  type StaticJsWebDebugAdapterOptions,
} from "../../src/web/index.js";
import { MAIN_THREAD_ID } from "./staticJsTestUtils.js";

export function createRequest<TArguments extends object | undefined>(
  seq: number,
  command: string,
  args?: TArguments,
): DebugProtocol.Request {
  return {
    seq,
    type: "request",
    command,
    arguments: args,
  };
}

export interface MessageCollector {
  readonly messages: DebugProtocol.ProtocolMessage[];
  waitFor<TMessage extends DebugProtocol.ProtocolMessage>(
    predicate: (message: DebugProtocol.ProtocolMessage) => message is TMessage,
  ): Promise<TMessage>;
}

export function createMessageCollector(adapter: StaticJsWebDebugAdapter): MessageCollector {
  const messages: DebugProtocol.ProtocolMessage[] = [];

  adapter.onDidSendMessage((message) => {
    console.log("Got message", message);
    messages.push(message);
  });

  return {
    messages,
    waitFor<TMessage extends DebugProtocol.ProtocolMessage>(
      predicate: (message: DebugProtocol.ProtocolMessage) => message is TMessage,
    ): Promise<TMessage> {
      return new Promise<TMessage>((resolve) => {
        const existing = messages.find(predicate);
        if (existing) {
          resolve(existing);
          return;
        }

        const dispose = adapter.onDidSendMessage((message) => {
          if (!predicate(message)) {
            return;
          }

          dispose();
          resolve(message);
        });
      });
    },
  };
}

export function isEvent<TEvent extends DebugProtocol.Event["event"]>(
  event: TEvent,
): (message: DebugProtocol.ProtocolMessage) => message is DebugProtocol.Event {
  return (message): message is DebugProtocol.Event =>
    message.type === "event" && (message as DebugProtocol.Event).event === event;
}

export function isResponse<TCommand extends string>(
  command: TCommand,
  requestSeq?: number,
): (message: DebugProtocol.ProtocolMessage) => message is DebugProtocol.Response {
  return (message): message is DebugProtocol.Response => {
    if (message.type !== "response") {
      return false;
    }

    const response = message as DebugProtocol.Response;
    return (
      response.command === command &&
      (requestSeq === undefined || response.request_seq === requestSeq)
    );
  };
}

export function isStoppedEvent(
  reason?: DebugProtocol.StoppedEvent["body"]["reason"],
): (message: DebugProtocol.ProtocolMessage) => message is DebugProtocol.Event {
  return (message): message is DebugProtocol.Event =>
    message.type === "event" &&
    (message as DebugProtocol.Event).event === "stopped" &&
    (reason === undefined ||
      ((message as DebugProtocol.Event).body as DebugProtocol.StoppedEvent["body"] | undefined)
        ?.reason === reason);
}

export function messageIndex(
  messages: readonly DebugProtocol.ProtocolMessage[],
  predicate: (message: DebugProtocol.ProtocolMessage) => boolean,
): number {
  return messages.findIndex(predicate);
}

export interface WebAdapterTestSession {
  readonly adapter: StaticJsWebDebugAdapter;
  readonly collector: MessageCollector;
  sendRequest<TArguments extends object | undefined>(command: string, args?: TArguments): number;
  initialize(): Promise<DebugProtocol.InitializeResponse>;
  launchStoppedScript(
    launchArgs: StaticJsLaunchRequestArguments,
  ): Promise<DebugProtocol.StoppedEvent>;
  requestStackTrace(threadId?: number): Promise<DebugProtocol.StackTraceResponse>;
}

export function createWebAdapterTestSession(
  options: StaticJsWebDebugAdapterOptions = {},
): WebAdapterTestSession {
  const adapter = createStaticJsWebDebugAdapter(options);
  const collector = createMessageCollector(adapter);
  let seq = 1;

  function sendRequest<TArguments extends object | undefined>(
    command: string,
    args?: TArguments,
  ): number {
    const requestSeq = seq++;
    adapter.handleMessage(createRequest(requestSeq, command, args));
    return requestSeq;
  }

  return {
    adapter,
    collector,
    sendRequest,
    async initialize(): Promise<DebugProtocol.InitializeResponse> {
      const requestSeq = sendRequest("initialize", {
        adapterID: STATIC_JS_DEBUGGER_TYPE,
      });
      const [response] = await Promise.all([
        collector.waitFor(
          isResponse("initialize", requestSeq),
        ) as Promise<DebugProtocol.InitializeResponse>,
        collector.waitFor(isEvent("initialized")),
      ]);
      return response;
    },
    async launchStoppedScript(
      launchArgs: StaticJsLaunchRequestArguments,
    ): Promise<DebugProtocol.StoppedEvent> {
      sendRequest("launch", launchArgs);
      sendRequest("configurationDone", {});
      return collector.waitFor(isStoppedEvent()) as Promise<DebugProtocol.StoppedEvent>;
    },
    async requestStackTrace(
      threadId: number = MAIN_THREAD_ID,
    ): Promise<DebugProtocol.StackTraceResponse> {
      const requestSeq = sendRequest("stackTrace", { threadId });
      return collector.waitFor(
        isResponse("stackTrace", requestSeq),
      ) as Promise<DebugProtocol.StackTraceResponse>;
    },
  };
}
