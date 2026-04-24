import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ambiguous-export-bindings", () => {
it("error-export-from-named-as.js", createTestHandler("language/module-code/ambiguous-export-bindings/error-export-from-named-as.js"));
it("error-export-from-named.js", createTestHandler("language/module-code/ambiguous-export-bindings/error-export-from-named.js"));
it("error-import-named-as.js", createTestHandler("language/module-code/ambiguous-export-bindings/error-import-named-as.js"));
it("error-import-named.js", createTestHandler("language/module-code/ambiguous-export-bindings/error-import-named.js"));
it("import-and-export-propagates-binding.js", createTestHandler("language/module-code/ambiguous-export-bindings/import-and-export-propagates-binding.js"));
it("namespace-unambiguous-if-export-star-as-from-and-import-star-as-and-export.js", createTestHandler("language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-export-star-as-from-and-import-star-as-and-export.js"));
it("namespace-unambiguous-if-export-star-as-from.js", createTestHandler("language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-export-star-as-from.js"));
it("namespace-unambiguous-if-import-star-as-and-export.js", createTestHandler("language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-import-star-as-and-export.js"));
it("omitted-from-namespace.js", createTestHandler("language/module-code/ambiguous-export-bindings/omitted-from-namespace.js"));
});
