import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("dataview.js", { tags: ["known-failing"] }, createTestHandler("built-ins/DataView/dataview.js"));
