import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-import-as-eval.js", createTestHandler("language/module-code/early-import-as-eval.js"));
