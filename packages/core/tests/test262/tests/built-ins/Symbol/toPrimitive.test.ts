import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("toPrimitive", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/toPrimitive/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/toPrimitive/prop-desc.js"));
});
