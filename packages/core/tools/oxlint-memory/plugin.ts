import { definePlugin, defineRule } from "@oxlint/plugins";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript-api";

import { analyzeAllocateSelf } from "./allocate-self-analysis.ts";
// .ts extension required: oxlint loads this via Node's native TS stripping, which (unlike tsc) does not remap .js -> .ts.
import { analyzeSourceFile } from "./allocation-analysis.ts";

const PLUGIN_DIR = path.dirname(fileURLToPath(import.meta.url));
const CORE_ROOT = path.resolve(PLUGIN_DIR, "..", ".."); // packages/core
const SRC_ROOT = path.join(CORE_ROOT, "src");
const TSCONFIG = path.join(CORE_ROOT, "tsconfig.lib.json");

let cachedProgram: ts.Program | undefined;

function getProgram(): ts.Program {
  if (cachedProgram) {
    return cachedProgram;
  }
  const configFile = ts.readConfigFile(TSCONFIG, ts.sys.readFile);
  if (configFile.error) {
    throw new Error(
      `oxlint-memory: failed to read ${TSCONFIG}: ${ts.flattenDiagnosticMessageText(configFile.error.messageText, "\n")}`,
    );
  }
  const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, CORE_ROOT);
  cachedProgram = ts.createProgram(parsed.fileNames, {
    ...parsed.options,
    noEmit: true,
    declaration: false,
    declarationMap: false,
    composite: false,
    incremental: false,
  });
  return cachedProgram;
}

function isUnderSrc(filename: string): boolean {
  const rel = path.relative(SRC_ROOT, filename);
  return !rel.startsWith("..") && !path.isAbsolute(rel);
}

const markableCapture = defineRule({
  create(context) {
    return {
      Program() {
        const filename = context.filename;
        if (!isUnderSrc(filename)) {
          return;
        }
        const program = getProgram();
        const sourceFile = program.getSourceFile(filename);
        if (!sourceFile) {
          return; // file not part of the lib program (e.g. a test) — ignore
        }
        for (const v of analyzeSourceFile(program, sourceFile)) {
          const start = sourceFile.getLineAndCharacterOfPosition(v.start);
          const end = sourceFile.getLineAndCharacterOfPosition(v.end);
          context.report({
            message: v.message,
            loc: {
              start: { line: start.line + 1, column: start.character },
              end: { line: end.line + 1, column: end.character },
            },
          });
        }
      },
    };
  },
});

const allocateSelf = defineRule({
  create(context) {
    return {
      Program() {
        const filename = context.filename;
        if (!isUnderSrc(filename)) {
          return;
        }
        const program = getProgram();
        const sourceFile = program.getSourceFile(filename);
        if (!sourceFile) {
          return;
        }
        for (const v of analyzeAllocateSelf(program, sourceFile)) {
          const start = sourceFile.getLineAndCharacterOfPosition(v.start);
          const end = sourceFile.getLineAndCharacterOfPosition(v.end);
          context.report({
            message: v.message,
            loc: {
              start: { line: start.line + 1, column: start.character },
              end: { line: end.line + 1, column: end.character },
            },
          });
        }
      },
    };
  },
});

export default definePlugin({
  meta: { name: "suntime-memory" },
  rules: { "markable-capture": markableCapture, "allocate-self": allocateSelf },
});
