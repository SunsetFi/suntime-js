import { describe, expect, it, vi } from "vitest";

import type { StaticJsAllocation } from "./StaticJsAllocation.js";

import { allocated } from "./allocated.js";

describe("allocated", () => {
  it("calls allocateSelf once and returns the instance", () => {
    const inst = { mark: vi.fn(), allocateSelf: vi.fn() } as unknown as StaticJsAllocation;
    const result = allocated(inst);
    expect(result).toBe(inst);
    expect(inst.allocateSelf as unknown as ReturnType<typeof vi.fn>).toHaveBeenCalledTimes(1);
  });
});
