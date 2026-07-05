import ts from "typescript";

/** Minimal type stubs mirroring the real markable/native-function surface. */
export const STUBS = `
interface StaticJsAllocation {
  mark(marks: Set<StaticJsAllocation>, allocate?: (...a: any[]) => void): void;
}
interface StaticJsValue extends StaticJsAllocation {
  readonly runtimeTypeOf: string;
}
interface StaticJsContainerMarkable<T extends StaticJsAllocation> extends StaticJsAllocation {
  set(v: T): void;
  readonly value: T | null;
}
declare function containerMarkable<T extends StaticJsAllocation>(initial?: T): StaticJsContainerMarkable<T>;
declare function compoundMarkable(markables: StaticJsAllocation[]): StaticJsAllocation;
interface StaticJsNativeFunctionOptions {
  length?: number;
  construct?: boolean | ((...args: StaticJsValue[]) => unknown);
  mark?: readonly StaticJsAllocation[];
}
declare class StaticJsNativeFunctionImpl {
  constructor(
    realm: unknown,
    name: string,
    call: (thisArg: StaticJsValue, ...args: StaticJsValue[]) => unknown,
    options?: StaticJsNativeFunctionOptions,
  );
}
declare const realm: unknown;
declare function allocated<T extends StaticJsAllocation>(instance: T): T;
declare abstract class AbstractMarkable implements StaticJsAllocation {
  mark(marks: Set<StaticJsAllocation>): void;
  allocateSelf(allocate?: (...a: any[]) => void): void;
  protected constructor();
}
declare class PlainClass { constructor(); }
`;

const FILE_NAME = "test.ts";

export function createProgram(source: string): {
  program: ts.Program;
  sourceFile: ts.SourceFile;
  checker: ts.TypeChecker;
} {
  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    strict: true,
    noEmit: true,
    skipLibCheck: true,
  };
  const host = ts.createCompilerHost(options, true);
  const originalGetSourceFile = host.getSourceFile.bind(host);
  host.getSourceFile = (fileName, langVersion, onError, shouldCreate) => {
    if (fileName === FILE_NAME) {
      return ts.createSourceFile(fileName, source, langVersion, true);
    }
    return originalGetSourceFile(fileName, langVersion, onError, shouldCreate);
  };
  const originalFileExists = host.fileExists.bind(host);
  host.fileExists = (fileName) => fileName === FILE_NAME || originalFileExists(fileName);
  const originalReadFile = host.readFile.bind(host);
  host.readFile = (fileName) => (fileName === FILE_NAME ? source : originalReadFile(fileName));

  const program = ts.createProgram([FILE_NAME], options, host);
  const sourceFile = program.getSourceFile(FILE_NAME)!;
  return { program, sourceFile, checker: program.getTypeChecker() };
}

/** Build a program from STUBS + body and run the analyzer over it. */
export async function analyze(body: string) {
  const { analyzeSourceFile } = await import("../allocation-analysis.js");
  const { program, sourceFile } = createProgram(STUBS + "\n" + body);
  return analyzeSourceFile(program, sourceFile);
}

/** Build a program from STUBS + body and run the allocate-self analyzer over it. */
export async function analyzeAllocSelf(body: string) {
  const { analyzeAllocateSelf } = await import("../allocate-self-analysis.js");
  const { program, sourceFile } = createProgram(STUBS + "\n" + body);
  return analyzeAllocateSelf(program, sourceFile);
}
