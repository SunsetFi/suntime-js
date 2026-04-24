import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("invalid-regexp-ps.js", createTestHandler("language/line-terminators/invalid-regexp-ps.js"));
