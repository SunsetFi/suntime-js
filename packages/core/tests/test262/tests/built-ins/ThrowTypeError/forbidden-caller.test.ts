import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("forbidden-caller.js", createTestHandler("built-ins/ThrowTypeError/forbidden-caller.js"));
