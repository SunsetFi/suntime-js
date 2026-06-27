import type { StaticJsGlobalEnvironmentRecord } from "#environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import type { StaticJsMarkable } from "#memory/StaticJsMarkable.js";
import type { StaticJsMemoryManager } from "#memory/StaticJsMemoryManager.js";
import type { StaticJsMemoryWeights } from "#memory/StaticJsMemoryWeights.js";
import type { StaticJsSymbol } from "#types/StaticJsSymbol.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { StaticJsOutOfMemoryError } from "#errors/StaticJsOutOfMemoryError.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

const DEFAULT_HIGH_WATERMARK_PERCENT = 0.8;

export class StaticJsMemoryManagerImpl implements StaticJsMemoryManager {
  private readonly _pins = new Set<StaticJsValue>();

  private _globalEnv: StaticJsGlobalEnvironmentRecord | null = null;
  private _symbolRegistry: ReadonlyMap<string, StaticJsSymbol> | null = null;

  private _isInitializing: boolean = true;
  private _maxSize: number = Infinity;
  private _initialSize: number = NaN;
  private _genZeroSize: number = 0;
  private _genOneSize: number = NaN;
  private _highWatermark: number = NaN;
  private _isMarking: boolean = false;

  constructor(
    maxMemorySize: number,
    memoryHighWatermark: number,
    private readonly _memoryWeights: StaticJsMemoryWeights,
  ) {
    this._maxSize = maxMemorySize;
    this._highWatermark = memoryHighWatermark;
  }

  initialize(
    globalEnv: StaticJsGlobalEnvironmentRecord,
    symbolRegistry: ReadonlyMap<string, StaticJsSymbol>,
  ): void {
    this._globalEnv = globalEnv;
    this._symbolRegistry = symbolRegistry;
    this._genOneSize = this._initialSize = this._computeReachableSize();
    this._genZeroSize = 0;
    this._isInitializing = false;
  }

  allocate(tag: StaticJsMemoryAllocationTag, count: number = 1): void {
    if (this._isInitializing) {
      // Don't bother tracking.  We will mark and sweep after initialization is complete.
      return;
    }

    if (this._isMarking) {
      throw new Error("Cannot allocate memory while marking");
    }

    const size = this._getSize(tag, count);

    if (this.allocatedSize + size > this._maxSize) {
      // Try an emergency recount of gen one.
      // Don't reset the gen zero size, as that is still ongoing.
      // This still means we can possibly double count items in it.
      this._genOneSize = this._computeReachableSize();

      if (this.allocatedSize + size > this._maxSize) {
        throw new StaticJsOutOfMemoryError(
          `Memory allocation of ${size} bytes exceeds max size of ${this._maxSize} bytes`,
        );
      }
    }

    this._genZeroSize += size;
  }

  sweep(): void {
    this._genOneSize = this._computeReachableSize();

    // If we somehow end up with less memory than we initialized with, take that into account,
    // to avoid showing a negative genOneSize.
    if (this._genOneSize < this._initialSize) {
      this._initialSize = this._genOneSize;
    }

    this._genZeroSize = 0;
  }

  sweepIfWatermark(): void {
    if (this.allocatedSize < this.highWatermark) {
      return;
    }

    this.sweep();
  }

  pin(value: StaticJsValue): void {
    this._pins.add(value);
  }

  unpin(value: StaticJsValue): void {
    this._pins.delete(value);
  }

  get genZeroSize(): number {
    return this._genZeroSize;
  }

  get genOneSize(): number {
    // Careful we don't send a negative value if we computed an initial generation size,
    // but have not yet computed the current generation one size.
    if (this._isInitializing) {
      return 0;
    }

    return this._genOneSize - this._initialSize;
  }

  get allocatedSize(): number {
    return this.genZeroSize + this.genOneSize;
  }

  get highWatermark(): number {
    if (Number.isNaN(this._highWatermark)) {
      return this._maxSize * DEFAULT_HIGH_WATERMARK_PERCENT;
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

  private _computeReachableSize() {
    if (this._isMarking) {
      throw new Error("Cannot trigger a mark operation while already marking");
    }

    if (!this._globalEnv || !this._symbolRegistry) {
      throw new Error(
        "Memory manager has not been initialized with global environment and symbol registry",
      );
    }

    this._isMarking = true;
    try {
      let markedSize = 0;
      const allocate = (tag: StaticJsMemoryAllocationTag, count: number = 1) => {
        markedSize += this._getSize(tag, count);
      };

      const marks = new Set<StaticJsMarkable>();

      for (const pin of this._pins) {
        pin.mark(marks, allocate);
      }

      this._globalEnv.mark(marks, allocate);
      for (const [name, symbol] of this._symbolRegistry?.entries() ?? []) {
        allocate(StaticJsMemoryAllocationTag.RawStringCharacter, name.length);
        symbol.mark(marks, allocate);
      }

      return markedSize;
    } finally {
      this._isMarking = false;
    }
  }

  private _getSize(tag: StaticJsMemoryAllocationTag, count: number = 1): number {
    const sizePerUnit = this._memoryWeights[tag];
    if (sizePerUnit === undefined) {
      throw new StaticJsEngineError(`Unknown memory allocation tag: ${tag}`);
    }

    if (typeof sizePerUnit === "function") {
      return sizePerUnit(count);
    }

    return sizePerUnit * count;
  }
}
