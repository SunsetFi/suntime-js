import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";

export interface StaticJsContainerMarkable<T extends StaticJsMarkable> extends StaticJsMarkable {
  set(markable: T): void;
  get value(): T | null;
  clear(): void;
}
export function containerMarkable<T extends StaticJsMarkable>(
  initial?: T,
): StaticJsContainerMarkable<T> {
  let value: T | null = initial ?? null;
  return {
    mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
      if (marks.has(this)) {
        return;
      }

      marks.add(this);

      if (value) {
        value.mark(marks, allocate);
      }
    },
    set(markable: T): void {
      value = markable;
    },
    clear(): void {
      value = null;
    },
    get value(): T | null {
      return value;
    },
  };
}
