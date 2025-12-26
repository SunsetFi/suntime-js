import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type StaticJsMemoryMonitor from "../StaticJsMemoryMonitor.js";

export default class StaticJsMemoryMonitorImpl
  implements StaticJsMemoryMonitor
{
  private _usedMemoryBytes = 0;

  getUsedMemoryBytes(): number {
    return this._usedMemoryBytes;
  }

  _alloc(bytes: number): void {
    this._usedMemoryBytes += bytes;
  }

  _release(bytes: number): void {
    if (bytes > this._usedMemoryBytes) {
      throw new StaticJsEngineError(
        `Attempted to release more memory (${bytes} bytes) than is currently allocated (${this._usedMemoryBytes} bytes).`,
      );
    }

    this._usedMemoryBytes -= bytes;
  }
}
