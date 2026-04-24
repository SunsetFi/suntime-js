import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isRawJSON", () => {
it("basic.js", createTestHandler("built-ins/JSON/isRawJSON/basic.js"));
it("builtin.js", createTestHandler("built-ins/JSON/isRawJSON/builtin.js"));
it("length.js", createTestHandler("built-ins/JSON/isRawJSON/length.js"));
it("name.js", createTestHandler("built-ins/JSON/isRawJSON/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/JSON/isRawJSON/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/JSON/isRawJSON/prop-desc.js"));
});
