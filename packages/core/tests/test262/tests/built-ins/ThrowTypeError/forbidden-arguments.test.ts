import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("forbidden-arguments.js", createTestHandler("built-ins/ThrowTypeError/forbidden-arguments.js"));
