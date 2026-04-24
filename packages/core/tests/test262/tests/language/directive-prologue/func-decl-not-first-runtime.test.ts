import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("func-decl-not-first-runtime.js", createTestHandler("language/directive-prologue/func-decl-not-first-runtime.js"));
