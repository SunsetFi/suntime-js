import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("unscopables", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/unscopables/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/unscopables/prop-desc.js"));
});
