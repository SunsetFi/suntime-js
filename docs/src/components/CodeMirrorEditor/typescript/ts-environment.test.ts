import { afterEach, describe, expect, it, vi } from "vitest";

import { getDefaultLibMap, __resetDefaultLibMapForTests } from "./ts-environment";

describe("getDefaultLibMap", () => {
  afterEach(__resetDefaultLibMapForTests);

  it("invokes the loader once and memoizes the promise across calls", async () => {
    __resetDefaultLibMapForTests();
    const map = new Map<string, string>([["/lib.d.ts", "// lib"]]);
    const loader = vi.fn().mockResolvedValue(map);

    const first = getDefaultLibMap(loader);
    const second = getDefaultLibMap(loader);

    expect(first).toBe(second);
    expect(await first).toBe(map);
    expect(loader).toHaveBeenCalledTimes(1);
  });

  it("does not cache a failed load, so a later call retries", async () => {
    __resetDefaultLibMapForTests();
    const map = new Map<string, string>([["/lib.d.ts", "// lib"]]);
    const loader = vi.fn().mockRejectedValueOnce(new Error("network")).mockResolvedValueOnce(map);

    await expect(getDefaultLibMap(loader)).rejects.toThrow("network");
    expect(await getDefaultLibMap(loader)).toBe(map);
    expect(loader).toHaveBeenCalledTimes(2);
  });
});
