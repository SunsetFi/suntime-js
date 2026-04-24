import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("pause", () => {
it("descriptor.js", createTestHandler("built-ins/Atomics/pause/descriptor.js"));
it("length.js", createTestHandler("built-ins/Atomics/pause/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/pause/name.js"));
it("non-integral-iterationnumber-throws.js", createTestHandler("built-ins/Atomics/pause/non-integral-iterationnumber-throws.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/pause/not-a-constructor.js"));
it("returns-undefined.js", createTestHandler("built-ins/Atomics/pause/returns-undefined.js"));
});
