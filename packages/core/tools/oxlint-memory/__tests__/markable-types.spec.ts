import ts from "typescript";
import { describe, expect, it } from "vitest";

import { isMarkableContainer, isMarkableType } from "../markable-types.js";
import { STUBS, createProgram } from "./program-fixture.js";

function typeOfDecl(decl: string) {
  const { sourceFile, checker } = createProgram(STUBS + "\n" + decl);
  const stmt = sourceFile.statements.at(-1)!;
  const name = (stmt as ts.VariableStatement).declarationList.declarations[0].name;
  return { type: checker.getTypeAtLocation(name), checker };
}

describe("isMarkableType", () => {
  it("is true for a direct StaticJsMarkable", () => {
    const { type, checker } = typeOfDecl("declare const m: StaticJsMarkable;");
    expect(isMarkableType(type, checker)).toBe(true);
  });
  it("is true for StaticJsValue (extends StaticJsMarkable)", () => {
    const { type, checker } = typeOfDecl("declare const v: StaticJsValue;");
    expect(isMarkableType(type, checker)).toBe(true);
  });
  it("is false for a plain string", () => {
    const { type, checker } = typeOfDecl("declare const s: string;");
    expect(isMarkableType(type, checker)).toBe(false);
  });
  it("is false for an array of markables (that is a container, not a markable)", () => {
    const { type, checker } = typeOfDecl("declare const a: StaticJsValue[];");
    expect(isMarkableType(type, checker)).toBe(false);
  });

  // Follow-up A: union-fixture tests
  it("is true for a union whose every constituent is markable", () => {
    const { type, checker } = typeOfDecl(
      "interface A extends StaticJsMarkable { a: 1 } interface B extends StaticJsMarkable { b: 1 } declare const u: A | B;",
    );
    expect(isMarkableType(type, checker)).toBe(true);
  });
  it("is false for a union with a non-markable constituent", () => {
    const { type, checker } = typeOfDecl("declare const u: StaticJsValue | string;");
    expect(isMarkableType(type, checker)).toBe(false);
  });

  // Follow-up B: tightened hasMarkMethod tests
  it("is true for a type whose mark takes Set<StaticJsMarkable> (real shape)", () => {
    const { type, checker } = typeOfDecl("declare const m: StaticJsMarkable;");
    expect(isMarkableType(type, checker)).toBe(true);
  });
  it("is false for a type whose mark first param is Set<string> (not a Set of markables)", () => {
    const { type, checker } = typeOfDecl(
      "interface Faux { mark(marks: Set<string>): void } declare const f: Faux;",
    );
    expect(isMarkableType(type, checker)).toBe(false);
  });
  it("is false for a type whose mark first param is not a Set", () => {
    const { type, checker } = typeOfDecl(
      "interface Faux2 { mark(x: string): void } declare const f: Faux2;",
    );
    expect(isMarkableType(type, checker)).toBe(false);
  });
});

describe("isMarkableContainer", () => {
  it("is true for StaticJsValue[]", () => {
    const { type, checker } = typeOfDecl("declare const a: StaticJsValue[];");
    expect(isMarkableContainer(type, checker)).toBe(true);
  });
  it("is true for Map<unknown, StaticJsValue>", () => {
    const { type, checker } = typeOfDecl("declare const m: Map<unknown, StaticJsValue>;");
    expect(isMarkableContainer(type, checker)).toBe(true);
  });
  it("is true for Set<StaticJsMarkable>", () => {
    const { type, checker } = typeOfDecl("declare const s: Set<StaticJsMarkable>;");
    expect(isMarkableContainer(type, checker)).toBe(true);
  });
  it("is false for string[]", () => {
    const { type, checker } = typeOfDecl("declare const a: string[];");
    expect(isMarkableContainer(type, checker)).toBe(false);
  });
  it("is false for a bare StaticJsValue", () => {
    const { type, checker } = typeOfDecl("declare const v: StaticJsValue;");
    expect(isMarkableContainer(type, checker)).toBe(false);
  });
});
