import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";

export interface StaticJsContainerMarkable<
  T extends StaticJsAllocation,
> extends StaticJsAllocation {
  set(markable: T): void;
  get value(): T | null;
  clear(): void;
}
export function containerMarkable<T extends StaticJsAllocation>(
  initial?: T,
): StaticJsContainerMarkable<T> {
  let value: T | null = initial ?? null;
  return {
    mark(marks: Set<StaticJsAllocation>): void {
      if (marks.has(this)) {
        return;
      }

      marks.add(this);

      if (value) {
        value.mark(marks);
      }
    },
    allocateSelf() {},
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
