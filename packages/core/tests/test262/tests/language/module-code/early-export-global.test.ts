import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-export-global.js", createTestHandler("language/module-code/early-export-global.js"));
