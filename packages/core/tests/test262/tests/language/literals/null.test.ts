import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("null", () => {
it("S7.8.1_A1_T1.js", createTestHandler("language/literals/null/S7.8.1_A1_T1.js"));
it("S7.8.1_A1_T2.js", createTestHandler("language/literals/null/S7.8.1_A1_T2.js"));
it("null-with-unicode.js", createTestHandler("language/literals/null/null-with-unicode.js"));
});
