import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("invalid-regexp-cr.js", createTestHandler("language/line-terminators/invalid-regexp-cr.js"));
