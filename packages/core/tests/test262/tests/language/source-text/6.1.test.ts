import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("6.1.js", { tags: ["known-failing"] }, createTestHandler("language/source-text/6.1.js"));
