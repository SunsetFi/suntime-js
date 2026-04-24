import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("comment-multi-ls.js", createTestHandler("language/line-terminators/comment-multi-ls.js"));
