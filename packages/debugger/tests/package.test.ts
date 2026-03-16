import * as debuggerPackage from "../src/index.js";

describe("@suntime-js/debugger package", () => {
  it("exports the debugger factory", () => {
    expect(debuggerPackage).toBeDefined();
    expect(typeof debuggerPackage.createStaticJsDebugger).toBe("function");
  });
});
