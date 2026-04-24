import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("decl-lex.js", createTestHandler("language/global-code/decl-lex.js"));
