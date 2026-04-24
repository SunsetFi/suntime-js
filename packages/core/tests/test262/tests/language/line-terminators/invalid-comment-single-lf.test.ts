import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("invalid-comment-single-lf.js", createTestHandler("language/line-terminators/invalid-comment-single-lf.js"));
