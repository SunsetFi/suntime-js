import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";

export function compoundMarkable(markables: StaticJsMarkable[]): StaticJsMarkable {
  return {
    mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
      if (marks.has(this)) {
        return;
      }

      marks.add(this);

      for (const markable of markables) {
        markable.mark(marks, allocate);
      }
    },
  };
}
