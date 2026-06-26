import type { StaticJsMemoryManager } from "#memory/StaticJsMemoryManager.js";

import { StaticJsOutOfMemoryError } from "#errors/StaticJsOutOfMemoryError.js";

export class StaticJsMemoryManagerImpl implements StaticJsMemoryManager {
  private _maxSize: number = Infinity;
  private _genZeroSize: number = 0;
  private _highWatermark: number = NaN;

  allocate(size: number): void {
    const next = this._genZeroSize + size;
    if (next > this._maxSize) {
      throw new StaticJsOutOfMemoryError(
        `Memory allocation of ${size} bytes exceeds max size of ${this._maxSize} bytes`,
      );
    }

    this._genZeroSize += size;
  }

  sweep(): void {
    // TODO: Scan all objects and graduate to genOne
    this._genZeroSize = 0;
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
    // TODO: Implement genOneSize tracking
    return 0;
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
