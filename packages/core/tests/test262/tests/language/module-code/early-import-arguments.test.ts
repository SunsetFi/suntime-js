import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-import-arguments.js", createTestHandler("language/module-code/early-import-arguments.js"));
