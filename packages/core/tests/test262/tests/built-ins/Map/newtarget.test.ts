import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("newtarget.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Map/newtarget.js"));
