export interface StaticJsMarkable {
  /**
   * Marks the object and its references.  Used for garbage collection and cycle detection.
   * @param marks A set of already marked objects to avoid infinite recursion.
   * @param allocate If present, a function to call to report the allocated memory for this object and its children.  This is used to track memory usage and enforce limits.
   */
  mark(marks: Set<StaticJsMarkable>, allocate?: (size: number) => void): void;
}
