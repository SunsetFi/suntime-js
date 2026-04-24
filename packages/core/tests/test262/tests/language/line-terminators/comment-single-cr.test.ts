import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("comment-single-cr.js", createTestHandler("language/line-terminators/comment-single-cr.js"));
