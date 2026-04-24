import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/SuppressedError/prototype/constructor.js"));
it("errors-absent-on-prototype.js", createTestHandler("built-ins/SuppressedError/prototype/errors-absent-on-prototype.js"));
it("message.js", createTestHandler("built-ins/SuppressedError/prototype/message.js"));
it("name.js", createTestHandler("built-ins/SuppressedError/prototype/name.js"));
it("prop-desc.js", createTestHandler("built-ins/SuppressedError/prototype/prop-desc.js"));
it("proto.js", createTestHandler("built-ins/SuppressedError/prototype/proto.js"));
});
