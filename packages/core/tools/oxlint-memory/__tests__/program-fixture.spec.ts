import ts from "typescript";
import { describe, expect, it } from "vitest";

import { STUBS, createProgram } from "./program-fixture.js";

describe("program-fixture", () => {
  it("builds a single-file program with no syntactic errors", () => {
    const { program, sourceFile } = createProgram(
      STUBS + "\ndeclare const stack: StaticJsValue;\n",
    );
    expect(program.getSyntacticDiagnostics(sourceFile)).toHaveLength(0);
  });

  it("resolves a StaticJsValue binding to a type carrying a `mark` member", () => {
    const { sourceFile, checker } = createProgram(
      STUBS + "\ndeclare const stack: StaticJsValue;\n",
    );
    const stmt = sourceFile.statements.at(-1) as ts.VariableStatement;
    const name = stmt.declarationList.declarations[0].name;
    const type = checker.getTypeAtLocation(name);
    expect(checker.getPropertyOfType(type, "mark")).toBeTruthy();
  });
});
