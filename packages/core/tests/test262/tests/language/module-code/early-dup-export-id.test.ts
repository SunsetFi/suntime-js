import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-dup-export-id.js", createTestHandler("language/module-code/early-dup-export-id.js"));
