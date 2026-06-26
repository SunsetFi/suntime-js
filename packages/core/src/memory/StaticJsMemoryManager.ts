export interface StaticJsMemoryManager {
  allocate(size: number): void;
  sweep(): void;
  sweepIfWatermark(): void;

  get genZeroSize(): number;
  get genOneSize(): number;
  get allocatedSize(): number;

  get highWatermark(): number;
  set highWatermark(size: number);

  get maxSize(): number;
  set maxSize(size: number);
}
