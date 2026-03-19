import { StaticJsDebugChangeEvent } from "../../events/StaticJsDebugChangeEvent.js";
import { StaticJsDebugStartEvent } from "../../events/StaticJsDebugStartEvent.js";
import { StaticJsDebugStopEvent } from "../../events/StaticJsDebugStopEvent.js";
import { StaticJsDebugTerminateEvent } from "../../events/StaticJsDebugTerminateEvent.js";

type Listener<T> = (event: T) => void;

export class StaticJsDebugSessionEventManager {
  private readonly _startListeners = new Set<Listener<StaticJsDebugStartEvent>>();
  private readonly _stopListeners = new Set<Listener<StaticJsDebugStopEvent>>();
  private readonly _terminateListeners = new Set<Listener<StaticJsDebugTerminateEvent>>();
  private readonly _changeListeners = new Set<Listener<StaticJsDebugChangeEvent>>();

  didStart(event: StaticJsDebugStartEvent): void {
    emit(this._startListeners, event);
  }

  didStop(event: StaticJsDebugStopEvent): void {
    emit(this._stopListeners, event);
  }

  didTerminate(event: StaticJsDebugTerminateEvent): void {
    emit(this._terminateListeners, event);
  }

  didChange(event: StaticJsDebugChangeEvent): void {
    emit(this._changeListeners, event);
  }

  onDidStart(listener: (event: StaticJsDebugStartEvent) => void): () => void {
    this._startListeners.add(listener);
    return () => this._startListeners.delete(listener);
  }

  onDidStop(listener: (event: StaticJsDebugStopEvent) => void): () => void {
    this._stopListeners.add(listener);
    return () => this._stopListeners.delete(listener);
  }

  onDidTerminate(listener: (event: StaticJsDebugTerminateEvent) => void): () => void {
    this._terminateListeners.add(listener);
    return () => this._terminateListeners.delete(listener);
  }

  onDidChange(listener: (event: StaticJsDebugChangeEvent) => void): () => void {
    this._changeListeners.add(listener);
    return () => this._changeListeners.delete(listener);
  }
}

function emit<T>(listeners: Set<(event: T) => void>, event: T): void {
  for (const listener of listeners) {
    listener(event);
  }
}
