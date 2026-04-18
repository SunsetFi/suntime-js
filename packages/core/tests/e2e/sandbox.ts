import { describe, it, expect } from "vitest";

import { StaticJsRealm } from "../../src/index.js";

describe("E2E: Sandbox", () => {
  it("Runs eval code within the sandbox", async () => {
    const realm = StaticJsRealm({});
    const code = `
      eval("globalThis.__evalSandboxTest = 42;");
    `;
    await realm.evaluateScript(code);
    const result = await realm.evaluateScript("__evalSandboxTest");
    expect(result.toNative()).toBe(42);
    expect((globalThis as any).__evalSandboxTest).toBeUndefined();
  });

  it("Runs Function code within the sandbox", async () => {
    const realm = StaticJsRealm({});
    const code = `
      Function("globalThis.__functionSandboxTest = 42;")();
    `;
    await realm.evaluateScript(code);
    const result = await realm.evaluateScript("__functionSandboxTest");
    expect(result.toNative()).toBe(42);
    expect((globalThis as any).__functionSandboxTest).toBeUndefined();
  });
});
