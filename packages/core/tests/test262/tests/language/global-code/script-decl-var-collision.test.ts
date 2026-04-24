import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("script-decl-var-collision.js", createTestHandler("language/global-code/script-decl-var-collision.js"));
