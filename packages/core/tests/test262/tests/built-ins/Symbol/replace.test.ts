import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("replace", () => {
it("cross-realm.js", createTestHandler("built-ins/Symbol/replace/cross-realm.js"));
it("prop-desc.js", createTestHandler("built-ins/Symbol/replace/prop-desc.js"));
});
