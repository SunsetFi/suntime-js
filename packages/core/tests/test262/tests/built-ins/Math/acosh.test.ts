import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("acosh", () => {
it("arg-is-infinity.js", createTestHandler("built-ins/Math/acosh/arg-is-infinity.js"));
it("arg-is-one.js", createTestHandler("built-ins/Math/acosh/arg-is-one.js"));
it("length.js", createTestHandler("built-ins/Math/acosh/length.js"));
it("name.js", createTestHandler("built-ins/Math/acosh/name.js"));
it("nan-returns.js", createTestHandler("built-ins/Math/acosh/nan-returns.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Math/acosh/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/Math/acosh/prop-desc.js"));
});
