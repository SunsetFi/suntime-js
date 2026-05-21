import { describe, expect, it } from "vitest";

import { parseBaselineData } from "./is-test-baseline.js";

const TESTS_MARKER = "test262/tests/";

function makeResult(
  relPath: string,
  assertions: { fullName: string; status: "passed" | "failed" }[],
) {
  return {
    name: `/fake/repo/${TESTS_MARKER}${relPath}`,
    assertionResults: assertions.map(({ fullName, status }) => ({
      fullName,
      status,
      ancestorTitles: [],
      title: fullName,
      duration: 0,
      failureMessages: [],
    })),
  };
}

describe("parseBaselineData", () => {
  it("indexes language tests as passing", () => {
    const data = {
      testResults: [
        makeResult("language/types/typeof/S11.4.3_A1.test.ts", [
          { fullName: "S11.4.3_A1.js", status: "passed" },
        ]),
      ],
    };

    const index = parseBaselineData(data);
    expect(index.get("language/types/typeof/S11.4.3_A1.test.ts|S11.4.3_A1.js")).toBe(true);
  });

  it("indexes built-ins tests as passing", () => {
    const data = {
      testResults: [
        makeResult("built-ins/Array/from.test.ts", [{ fullName: "from.js", status: "passed" }]),
      ],
    };

    const index = parseBaselineData(data);
    expect(index.get("built-ins/Array/from.test.ts|from.js")).toBe(true);
  });

  it("indexes failing tests as false", () => {
    const data = {
      testResults: [
        makeResult("language/statements/let/let.test.ts", [
          { fullName: "let-basic.js", status: "failed" },
        ]),
      ],
    };

    const index = parseBaselineData(data);
    expect(index.get("language/statements/let/let.test.ts|let-basic.js")).toBe(false);
  });

  it("builds a unified index from both language and built-ins test results", () => {
    const data = {
      testResults: [
        makeResult("language/types/typeof/S11.4.3_A1.test.ts", [
          { fullName: "S11.4.3_A1.js", status: "passed" },
        ]),
        makeResult("built-ins/Array/from.test.ts", [{ fullName: "from.js", status: "passed" }]),
      ],
    };

    const index = parseBaselineData(data);
    expect(index.get("language/types/typeof/S11.4.3_A1.test.ts|S11.4.3_A1.js")).toBe(true);
    expect(index.get("built-ins/Array/from.test.ts|from.js")).toBe(true);
  });

  it("ignores entries without the tests marker", () => {
    const data = {
      testResults: [
        {
          name: "/no/marker/here/foo.test.ts",
          assertionResults: [{ fullName: "foo.js", status: "passed" }],
        },
      ],
    };

    const index = parseBaselineData(data);
    expect(index.size).toBe(0);
  });
});
