import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("search", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/search/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/search/prop-desc.js"));
});
