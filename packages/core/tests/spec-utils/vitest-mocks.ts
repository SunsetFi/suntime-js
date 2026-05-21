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

export function makeTest262Test(fullName: string, state: "passed" | "failed" | "skipped") {
  return { fullName, result: () => ({ state }) };
}

export function makeTest262Module(
  projectName: string,
  moduleId: string,
  tests: ReturnType<typeof makeTest262Test>[] = [],
): TestModule {
  return {
    project: { name: projectName },
    moduleId,
    children: { allTests: () => tests },
  } as unknown as TestModule;
}
