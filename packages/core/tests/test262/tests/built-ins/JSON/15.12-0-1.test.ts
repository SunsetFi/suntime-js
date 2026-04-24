import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("15.12-0-1.js", { tags: ["known-failing"] }, createTestHandler("built-ins/JSON/15.12-0-1.js"));
