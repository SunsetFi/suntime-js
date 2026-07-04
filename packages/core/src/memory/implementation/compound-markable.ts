import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";

export function compoundMarkable(markables: StaticJsAllocation[]): StaticJsAllocation {
  return {
    mark(marks: Set<StaticJsAllocation>): void {
      if (marks.has(this)) {
        return;
      }

      marks.add(this);

      for (const markable of markables) {
        markable.mark(marks);
      }
    },
    allocateSelf() {},
  };
}
