import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("rawJSON", () => {
it("basic.js", createTestHandler("built-ins/JSON/rawJSON/basic.js"));
it("bigint-raw-json-can-be-stringified.js", createTestHandler("built-ins/JSON/rawJSON/bigint-raw-json-can-be-stringified.js"));
it("builtin.js", createTestHandler("built-ins/JSON/rawJSON/builtin.js"));
it("illegal-empty-and-start-end-chars.js", createTestHandler("built-ins/JSON/rawJSON/illegal-empty-and-start-end-chars.js"));
it("invalid-JSON-text.js", createTestHandler("built-ins/JSON/rawJSON/invalid-JSON-text.js"));
it("length.js", createTestHandler("built-ins/JSON/rawJSON/length.js"));
it("name.js", createTestHandler("built-ins/JSON/rawJSON/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/JSON/rawJSON/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/JSON/rawJSON/prop-desc.js"));
it("returns-expected-object.js", createTestHandler("built-ins/JSON/rawJSON/returns-expected-object.js"));
});
