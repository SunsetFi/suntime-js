import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("nan-throws-rangeerror.js", createTestHandler("built-ins/BigInt/nan-throws-rangeerror.js"));
