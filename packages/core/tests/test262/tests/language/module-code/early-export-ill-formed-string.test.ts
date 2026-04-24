import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-export-ill-formed-string.js", createTestHandler("language/module-code/early-export-ill-formed-string.js"));
