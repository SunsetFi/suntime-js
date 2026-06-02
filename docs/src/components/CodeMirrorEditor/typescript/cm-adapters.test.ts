import { createDefaultMapFromNodeModules } from "@typescript/vfs";
import ts from "typescript";
import { describe, expect, it } from "vitest";

import { createBlockLanguageService, type TypingsFile } from "./block-language-service";
import {
  inBufferDefinitionRange,
  quickInfoAt,
  toCmCompletions,
  toCmDiagnostics,
} from "./cm-adapters";

const LIB_MAP = createDefaultMapFromNodeModules({ target: ts.ScriptTarget.ES2020 }, ts);
const FILE = "/block-test.ts";

function svcWith(doc: string, typings: TypingsFile[] = []) {
  return createBlockLanguageService({ libMap: LIB_MAP, typings, initialDoc: doc, filePath: FILE });
}

describe("toCmCompletions", () => {
  it("returns member completion options for the type at the cursor", () => {
    const doc = "const widget = { alpha: 1, beta() {} };\nwidget.";
    const svc = svcWith(doc);
    const result = toCmCompletions(svc.languageService, FILE, doc.length, doc.length);
    expect(result).not.toBeNull();
    const labels = result!.options.map((o) => o.label);
    expect(labels).toContain("alpha");
    expect(labels).toContain("beta");
    expect(result!.from).toBe(doc.length);
    // kindToCmType mapping: data member -> "property", method -> "function".
    expect(result!.options.find((o) => o.label === "alpha")?.type).toBe("property");
    expect(result!.options.find((o) => o.label === "beta")?.type).toBe("function");
  });
});

describe("toCmDiagnostics", () => {
  it("maps a TS type error to a CM error diagnostic with offsets", () => {
    const doc = 'const x: number = "nope";';
    const svc = svcWith(doc);
    const diags = toCmDiagnostics(svc.languageService, FILE);
    expect(diags).toHaveLength(1);
    expect(diags[0].severity).toBe("error");
    expect(diags[0].from).toBeGreaterThanOrEqual(0);
    expect(diags[0].to).toBeGreaterThan(diags[0].from);
    expect(typeof diags[0].message).toBe("string");
  });
});

describe("quickInfoAt", () => {
  it("returns the type text and span for an identifier", () => {
    const doc = "const count: number = 1;\ncount;";
    const svc = svcWith(doc);
    const pos = doc.lastIndexOf("count") + 1;
    const info = quickInfoAt(svc.languageService, FILE, pos);
    expect(info).not.toBeNull();
    expect(info!.text).toContain("number");
    expect(info!.to).toBeGreaterThan(info!.from);
  });
});

describe("inBufferDefinitionRange", () => {
  it("returns the declaration range for an in-buffer symbol", () => {
    const doc = "const foo = 1;\nfoo;";
    const svc = svcWith(doc);
    const pos = doc.lastIndexOf("foo") + 1;
    const range = inBufferDefinitionRange(svc.languageService, FILE, pos);
    expect(range).toEqual({ from: doc.indexOf("foo"), to: doc.indexOf("foo") + 3 });
  });

  it("returns null when the definition lives in another (typings) file", () => {
    const doc = 'import { widget } from "widget-lib";\nwidget;';
    const svc = svcWith(doc, [
      {
        filePath: "/node_modules/widget-lib/package.json",
        contents: JSON.stringify({ name: "widget-lib", version: "0.0.0", types: "index.d.ts" }),
      },
      {
        filePath: "/node_modules/widget-lib/index.d.ts",
        contents: "export declare const widget: number;",
      },
    ]);
    const pos = doc.lastIndexOf("widget") + 1;
    const range = inBufferDefinitionRange(svc.languageService, FILE, pos);
    expect(range).toBeNull();
  });
});
