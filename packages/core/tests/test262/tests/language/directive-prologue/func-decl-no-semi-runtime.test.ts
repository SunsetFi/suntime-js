import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("func-decl-no-semi-runtime.js", createTestHandler("language/directive-prologue/func-decl-no-semi-runtime.js"));
