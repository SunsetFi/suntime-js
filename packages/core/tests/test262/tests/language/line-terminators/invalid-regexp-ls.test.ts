import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("invalid-regexp-ls.js", createTestHandler("language/line-terminators/invalid-regexp-ls.js"));
