import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("source-phase-import", () => {
it("import-source.js", createTestHandler("language/module-code/source-phase-import/import-source.js"));
});
