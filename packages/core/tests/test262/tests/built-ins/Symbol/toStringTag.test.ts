import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("toStringTag", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/toStringTag/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/toStringTag/prop-desc.js"));
});
