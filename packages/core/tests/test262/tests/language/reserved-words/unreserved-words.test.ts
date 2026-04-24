import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("unreserved-words.js", createTestHandler("language/reserved-words/unreserved-words.js"));
