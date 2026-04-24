import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("proto-from-ctor-realm.js", createTestHandler("built-ins/Function/proto-from-ctor-realm.js"));
