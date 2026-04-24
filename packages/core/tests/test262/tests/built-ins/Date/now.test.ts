import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("now", () => {
it("15.9.4.4-0-1.js", createTestHandler("built-ins/Date/now/15.9.4.4-0-1.js"));
it("15.9.4.4-0-2.js", createTestHandler("built-ins/Date/now/15.9.4.4-0-2.js"));
it("15.9.4.4-0-3.js", createTestHandler("built-ins/Date/now/15.9.4.4-0-3.js"));
it("15.9.4.4-0-4.js", createTestHandler("built-ins/Date/now/15.9.4.4-0-4.js"));
it("name.js", createTestHandler("built-ins/Date/now/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Date/now/not-a-constructor.js"));
});
