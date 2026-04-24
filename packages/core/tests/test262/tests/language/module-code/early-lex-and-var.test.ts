import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-lex-and-var.js", createTestHandler("language/module-code/early-lex-and-var.js"));
