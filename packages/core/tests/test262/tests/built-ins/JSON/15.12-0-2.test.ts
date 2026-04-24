import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("15.12-0-2.js", { tags: ["known-failing"] }, createTestHandler("built-ins/JSON/15.12-0-2.js"));
