import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("debugger", () => {
it("expression.js", createTestHandler("language/statements/debugger/expression.js"));
it("statement.js", createTestHandler("language/statements/debugger/statement.js"));
});
