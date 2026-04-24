import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("resolve-non-thenable-immed.js", createTestHandler("built-ins/Promise/resolve-non-thenable-immed.js"));
