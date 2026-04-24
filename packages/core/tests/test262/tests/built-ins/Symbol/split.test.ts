import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("split", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/split/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/split/prop-desc.js"));
});
