import type { DebugProtocol } from "@vscode/debugprotocol";

import type { StaticJsDebugAdapterErrorCode } from "../adapter/StaticJsDebugAdapterErrorCode.js";
import type { StaticJsWebDebugAdapterMessageListener } from "./types/StaticJsWebDebugAdapterMessageListener.js";

export class StaticJsWebDebugAdapterMessageBus {
  private readonly _listeners = new Set<StaticJsWebDebugAdapterMessageListener>();
  private _nextOutgoingSequence = 1;
  private _disposed = false;

  subscribe(listener: StaticJsWebDebugAdapterMessageListener): () => void {
    if (this._disposed) {
      return () => {};
    }

    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    };
  }

  emitMessage<TMessage extends DebugProtocol.ProtocolMessage>(message: TMessage): void {
    if (this._disposed) {
      return;
    }

    this._listeners.forEach((listener) => listener(message));
  }

  emitResponse<TResponse extends DebugProtocol.Response>(
    request: DebugProtocol.Request,
    body?: TResponse["body"],
  ): void {
    const response: DebugProtocol.Response = {
      seq: this._nextOutgoingSequence++,
      type: "response",
      request_seq: request.seq,
      success: true,
      command: request.command,
      body,
    };

    this.emitMessage(response);
  }

  emitErrorResponse(
    request: DebugProtocol.Request,
    code: StaticJsDebugAdapterErrorCode,
    message: string,
  ): void {
    const response: DebugProtocol.ErrorResponse = {
      seq: this._nextOutgoingSequence++,
      type: "response",
      request_seq: request.seq,
      success: false,
      command: request.command,
      message,
      body: {
        error: {
          id: code,
          format: message,
          showUser: true,
        },
      },
    };

    this.emitMessage(response);
  }

  emitEvent<TEvent extends DebugProtocol.Event>(
    event: TEvent["event"],
    body?: TEvent["body"],
  ): void {
    const protocolEvent: DebugProtocol.Event = {
      seq: this._nextOutgoingSequence++,
      type: "event",
      event,
      body,
    };

    this.emitMessage(protocolEvent);
  }

  dispose(): void {
    if (this._disposed) {
      return;
    }

    this._disposed = true;
    this._listeners.clear();
  }

  get disposed(): boolean {
    return this._disposed;
  }
}
