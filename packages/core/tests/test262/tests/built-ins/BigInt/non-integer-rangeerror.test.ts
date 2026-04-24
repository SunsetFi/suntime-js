import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("non-integer-rangeerror.js", createTestHandler("built-ins/BigInt/non-integer-rangeerror.js"));
