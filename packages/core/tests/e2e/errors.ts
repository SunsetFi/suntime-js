import { describe, expect, it } from "vitest";

import { StaticJsRealm } from "../../src/runtime/realm/factories/StaticJsRealm.js";
import { isStaticJsFunction } from "../../src/runtime/types/StaticJsFunction.js";
import { isStaticJsObject } from "../../src/runtime/types/StaticJsObject.js";

import { expectStaticJsObject, expectStaticJsString } from "./staticjs-expect.js";

describe("E2E: Errors", () => {
  describe("Error constructor", () => {
    it("should be provided", async () => {
      const realm = StaticJsRealm();

      const ctor = await realm.evaluateExpression("Error");
      expect(isStaticJsFunction(ctor)).toBe(true);
    });

    describe.each([
      { factory: "constructed", factoryNew: "new" },
      { factory: "called as a function", factoryNew: "" },
    ])("when $factory", ({ factoryNew }) => {
      it("should create an error object", async () => {
        const realm = StaticJsRealm();

        const error = await realm.evaluateExpression(`${factoryNew} Error()`);
        expect(isStaticJsObject(error)).toBe(true);
      });

      it("should accept a message argument", async () => {
        const realm = StaticJsRealm();

        const error = await realm.evaluateExpression(`${factoryNew} Error("Test message")`);
        expectStaticJsObject(error);

        const message = await error.getAsync("message");
        expectStaticJsString(message);
        expect(message.value).toBe("Test message");
      });

      it("should provide a stack trace", async () => {
        const realm = StaticJsRealm();

        const scriptLines = [
          "(function outer() {",
          "  function inner() {",
          `    return ${factoryNew} Error("My message");`,
          "  }",
          "  return inner();",
          "})()",
        ];

        const error = await realm.evaluateExpression(scriptLines.join("\n"), {
          sourceName: "test.js",
        });
        expectStaticJsObject(error);

        const stack = await error.getAsync("stack");
        expectStaticJsString(stack);

        const lines = stack.value.split("\n").map((line) => line.trim());
        expect(lines[0]).toBe("Error: My message");

        // FIXME: These need to be the current node line, not the function declaration line.
        expect(lines[1]).toBe("at inner (test.js:2:2)");
        expect(lines[2]).toBe("at outer (test.js:1:1)");
        expect(lines[3]).toBe("at test.js:1:0");
      });
    });
  });

  describe.each([
    { errorConstructor: "EvalError" },
    { errorConstructor: "RangeError" },
    { errorConstructor: "ReferenceError" },
    { errorConstructor: "SyntaxError" },
    { errorConstructor: "TypeError" },
    { errorConstructor: "URIError" },
  ])("$errorConstructor", ({ errorConstructor }) => {
    describe.each([
      { factory: "constructed", factoryNew: "new" },
      { factory: "called as a function", factoryNew: "" },
    ])("when $factory", ({ factoryNew }) => {
      it("should create an error object", async () => {
        const realm = StaticJsRealm();

        const error = await realm.evaluateExpression(`${factoryNew} ${errorConstructor}()`);
        expect(isStaticJsObject(error)).toBe(true);
      });

      it("should accept a message argument", async () => {
        const realm = StaticJsRealm();

        const error = await realm.evaluateExpression(
          `${factoryNew} ${errorConstructor}("Test message")`,
        );
        expectStaticJsObject(error);

        const message = await error.getAsync("message");
        expectStaticJsString(message);
        expect(message.value).toBe("Test message");
      });

      it("should provide a stack trace", async () => {
        const realm = StaticJsRealm();

        const scriptLines = [
          "(function outer() {",
          "  function inner() {",
          `    return ${factoryNew} ${errorConstructor}("My message");`,
          "  }",
          "  return inner();",
          "})()",
        ];

        const error = await realm.evaluateExpression(scriptLines.join("\n"), {
          sourceName: "test.js",
        });
        expectStaticJsObject(error);

        const stack = await error.getAsync("stack");
        expectStaticJsString(stack);

        const lines = stack.value.split("\n").map((line) => line.trim());
        expect(lines[0]).toBe(`${errorConstructor}: My message`);

        // FIXME: These need to be the current node line, not the function declaration line.
        expect(lines[1]).toBe("at inner (test.js:2:2)");
        expect(lines[2]).toBe("at outer (test.js:1:1)");
        expect(lines[3]).toBe("at test.js:1:0");
      });
    });
  });
});
