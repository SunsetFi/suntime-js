import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("distinct-cross-realm.js", createTestHandler("built-ins/ThrowTypeError/distinct-cross-realm.js"));
