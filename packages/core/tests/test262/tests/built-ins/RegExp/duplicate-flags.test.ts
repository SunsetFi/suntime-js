import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("duplicate-flags.js", createTestHandler("built-ins/RegExp/duplicate-flags.js"));
