import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("decl-lex-restricted-global.js", createTestHandler("language/global-code/decl-lex-restricted-global.js"));
