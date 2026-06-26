import type { StaticJsMemoryManager } from "#memory/StaticJsMemoryManager.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsOutOfMemoryError } from "#errors/StaticJsOutOfMemoryError.js";

export class StaticJsMemoryManagerImpl implements StaticJsMemoryManager {
  private _isInitializing: boolean = true;
  private _maxSize: number = Infinity;
  private _genInitialSize: number = 0;
  private _genZeroSize: number = 0;
  private _genOneSize: number = NaN;
  private _highWatermark: number = NaN;
  private _isMarking: boolean = false;

  constructor(
    private readonly _realm: StaticJsRealm,
    maxMemorySize: number,
    memoryHighWatermark: number,
  ) {
    this._maxSize = maxMemorySize;
    this._highWatermark = memoryHighWatermark;
  }

  initialize() {
    this.sweep();
    this._isInitializing = false;
  }

  allocate(size: number): void {
    if (!this._isInitializing) {
      if (this.allocatedSize + size > this._maxSize) {
        throw new StaticJsOutOfMemoryError(
          `Memory allocation of ${size} bytes exceeds max size of ${this._maxSize} bytes`,
        );
      }
    }

    if (this._isMarking) {
      this._genOneSize += size;
    } else {
      this._genZeroSize += size;
    }
  }

  sweep(): void {
    if (this._isMarking) {
      throw new Error("Cannot sweep cyclically");
    }

    this._isMarking = true;
    try {
      this._genZeroSize = 0;
      this._genOneSize = 0;
      const marks = new Set<StaticJsValue>();
      this._realm.globalEnv.mark(marks, true);
    } finally {
      if (this._isInitializing) {
        this._genInitialSize = this._genOneSize;
        this._genOneSize = NaN;
      }
      this._isMarking = false;
    }
  }

  sweepIfWatermark(): void {
    if (this.allocatedSize < this.highWatermark) {
      return;
    }

    this.sweep();
  }

  get genZeroSize(): number {
    return this._genZeroSize;
  }

  get genOneSize(): number {
    if (Number.isNaN(this._genOneSize)) {
      return 0;
    }

    return this._genOneSize - this._genInitialSize;
  }

  get allocatedSize(): number {
    return this.genZeroSize + this.genOneSize;
  }

  get highWatermark(): number {
    if (Number.isNaN(this._highWatermark)) {
      return this._maxSize * 0.8;
    }
    return this._highWatermark;
  }

  set highWatermark(size: number) {
    if (size < 0) {
      throw new Error("highWatermark must be a non-negative number");
    }

    this._highWatermark = size;
  }

  get maxSize(): number {
    return this._maxSize;
  }

  set maxSize(size: number) {
    if (Number.isNaN(size) || size < 0) {
      throw new Error("maxSize must be a non-negative number");
    }

    this._maxSize = size;
  }
}
