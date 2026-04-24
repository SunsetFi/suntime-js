import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("not-a-constructor.js", createTestHandler("built-ins/isFinite/not-a-constructor.js"));
