import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("global-object.js", createTestHandler("built-ins/global/global-object.js"));
