import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("comment-single-lf.js", createTestHandler("language/line-terminators/comment-single-lf.js"));
