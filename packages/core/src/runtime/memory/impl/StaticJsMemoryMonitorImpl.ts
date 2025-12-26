import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type StaticJsMemoryMonitor from "../StaticJsMemoryMonitor.js";

export default class StaticJsMemoryMonitorImpl
  implements StaticJsMemoryMonitor
{
  private _totalObjects = 0;
  get totalObjects(): number {
    return this._totalObjects;
  }

  _alloc(_value: StaticJsValue): void {
    this._totalObjects += 1;
  }

  _release(_value: StaticJsValue): void {
    if (this._totalObjects === 0) {
      throw new StaticJsEngineError(
        `Attempted to release an object, but no objects in the monitor.`,
      );
    }

    this._totalObjects -= 1;
  }
}
