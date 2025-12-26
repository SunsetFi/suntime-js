export default interface StaticJsMemoryMonitor {
  getUsedMemoryBytes(): number;

  _alloc(bytes: number): void;
  _release(bytes: number): void;
}
