import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("invalid-comment-single-ps.js", createTestHandler("language/line-terminators/invalid-comment-single-ps.js"));
