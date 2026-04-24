import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("unmapped", () => {
it("Symbol.iterator.js", createTestHandler("language/arguments-object/unmapped/Symbol.iterator.js"));
it("via-params-dflt.js", createTestHandler("language/arguments-object/unmapped/via-params-dflt.js"));
it("via-params-dstr.js", createTestHandler("language/arguments-object/unmapped/via-params-dstr.js"));
it("via-params-rest.js", createTestHandler("language/arguments-object/unmapped/via-params-rest.js"));
it("via-strict.js", createTestHandler("language/arguments-object/unmapped/via-strict.js"));
});
