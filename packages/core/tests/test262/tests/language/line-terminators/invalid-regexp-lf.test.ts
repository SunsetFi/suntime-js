import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("invalid-regexp-lf.js", createTestHandler("language/line-terminators/invalid-regexp-lf.js"));
