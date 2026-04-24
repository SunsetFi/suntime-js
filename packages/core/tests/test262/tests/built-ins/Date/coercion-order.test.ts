import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("coercion-order.js", createTestHandler("built-ins/Date/coercion-order.js"));
