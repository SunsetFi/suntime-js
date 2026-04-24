import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("SQRT2", () => {
it("prop-desc.js", createTestHandler("built-ins/Math/SQRT2/prop-desc.js"));
it("value.js", createTestHandler("built-ins/Math/SQRT2/value.js"));
});
