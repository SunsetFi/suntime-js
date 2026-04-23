import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { relative, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import getTest262Path from "./utils/get-test262-path.js";

const testRootDir = fileURLToPath(new URL(".", import.meta.url));

const outputTestDir = fileURLToPath(new URL("tests", import.meta.url));
const test262Dir = getTest262Path("test");

interface FolderConfig {
  name: string;
  importFn: string;
}

const optInTestFolders: FolderConfig[] = [
  { name: "language", importFn: "define-language-test-from-path" },
  { name: "built-ins", importFn: "define-builtins-test-from-path" },
];
const flattenDepth = 2;

function* getTestPaths(depth: number = 0, currentPath = test262Dir): Generator<string> {
  currentPath = resolve(currentPath);

  if (depth > flattenDepth) {
    yield currentPath;
    return;
  }

  const entries = readdirSync(currentPath);
  const childFolders: string[] = [];
  const childFiles: string[] = [];

  for (const entry of entries) {
    if (entry.includes("_FIXTURE")) {
      continue;
    }

    const entryPath = `${currentPath}/${entry}`;
    const stats = statSync(entryPath);
    if (!stats.isDirectory()) {
      if (entry.endsWith(".js")) {
        childFiles.push(entryPath);
      }
      continue;
    }

    childFolders.push(entryPath);
  }

  if (childFolders.length === 0) {
    yield currentPath;
    return;
  }

  for (const childFolder of childFolders) {
    yield* getTestPaths(depth + 1, childFolder);
  }

  for (const childFile of childFiles) {
    yield childFile;
  }
}

rmSync(outputTestDir, { recursive: true, force: true });
mkdirSync(outputTestDir, { recursive: true });

for (const folder of optInTestFolders) {
  for (const test262Path of getTestPaths(1, getTest262Path(`test/${folder.name}`))) {
    const relativeTest262Path = relative(test262Dir, test262Path);
    if (relativeTest262Path.includes("..")) {
      throw new Error("Test dir is outside of test262: " + test262Path);
    }

    const destFolderPath = join(outputTestDir, relativeTest262Path, "..");
    const fileName = relativeTest262Path
      .split("/")
      .filter((x) => x.length > 0)
      .at(-1);

    if (!fileName) {
      throw new Error("Could not determine file name for test dir: " + test262Path);
    }

    mkdirSync(destFolderPath, { recursive: true });
    const source = createTestFile(relativeTest262Path, destFolderPath, folder.importFn);
    writeFileSync(join(destFolderPath, `${fileName}.test.ts`), source, "utf-8");
  }
}

function createTestFile(test262Dir: string, filePath: string, importFn: string) {
  const importPath = relative(testRootDir, filePath);
  const escapeDepth = importPath.split("/").length;
  const relativeImportPath = "../".repeat(escapeDepth);
  const camelName = importFn.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
  return [
    `import ${camelName} from "${relativeImportPath}${importFn}.js";`,
    `${camelName}(${JSON.stringify(test262Dir)});`,
    ``,
  ].join("\n");
}
