import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("map.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Map/map.js"));
