import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("hasInstance", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/hasInstance/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/hasInstance/prop-desc.js"));
});
