import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-export-unresolvable.js", createTestHandler("language/module-code/early-export-unresolvable.js"));
