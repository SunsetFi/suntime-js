import { createSystem, createVirtualTypeScriptEnvironment } from "@typescript/vfs";
import ts from "typescript";

import { TS_TARGET } from "./ts-environment";

/** An external `.d.ts` (or its package.json) injected into a block's env. */
export interface TypingsFile {
  /**
   * Virtual absolute path. Use a node_modules path to make bare imports
   * resolve, e.g. "/node_modules/@suntime-js/core/index.d.ts" paired with a
   * "/node_modules/@suntime-js/core/package.json"; or "/types/foo.d.ts" for an
   * ambient `declare module`.
   */
  filePath: string;
  contents: string;
}

export interface BlockLanguageService {
  readonly filePath: string;
  readonly languageService: ts.LanguageService;
  /** Replace the buffer file's text so subsequent LS queries see it. */
  updateBuffer(text: string): void;
}

export interface CreateBlockLanguageServiceOptions {
  /** Standard-lib `.d.ts` map (from getDefaultLibMap, or empty in tests). */
  libMap: Map<string, string>;
  typings: TypingsFile[];
  initialDoc: string;
  filePath: string;
  /** Overrides merged over the defaults below. */
  compilerOptions?: ts.CompilerOptions;
}

const DEFAULT_COMPILER_OPTIONS: ts.CompilerOptions = {
  target: TS_TARGET,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  allowJs: true,
  noEmit: true,
  baseUrl: "/",
};

export function createBlockLanguageService({
  libMap,
  typings,
  initialDoc,
  filePath,
  compilerOptions,
}: CreateBlockLanguageServiceOptions): BlockLanguageService {
  const fsMap = new Map(libMap);
  for (const typing of typings) {
    fsMap.set(typing.filePath, typing.contents);
  }
  fsMap.set(filePath, initialDoc);

  const options = { ...DEFAULT_COMPILER_OPTIONS, ...compilerOptions };
  const system = createSystem(fsMap);
  const env = createVirtualTypeScriptEnvironment(system, [filePath], ts, options);

  return {
    filePath,
    languageService: env.languageService,
    updateBuffer(text: string) {
      env.updateFile(filePath, text);
    },
  };
}
