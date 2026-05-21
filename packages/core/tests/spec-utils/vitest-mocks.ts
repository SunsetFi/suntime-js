import type { TestModule } from "vitest/node";

export function makeTest(state: "passed" | "failed" | "skipped") {
  return { result: () => ({ state }) };
}

export function makeModule(
  projectName: string,
  tests: ReturnType<typeof makeTest>[] = [],
): TestModule {
  return {
    project: { name: projectName },
    children: { allTests: () => tests },
  } as unknown as TestModule;
}
