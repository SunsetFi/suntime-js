import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("unique-per-realm-function-proto.js", createTestHandler("built-ins/ThrowTypeError/unique-per-realm-function-proto.js"));
