import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { format } from "oxfmt";

import { isTestIgnored } from "../ignores.js";
import { isTestBaseline } from "../is-test-baseline.js";
import Test262File from "../Test262File.js";
import getTest262Path from "../utils/get-test262-path.js";

export async function createTestFile(outDir: string, path: string, tests: string[]) {
  const pathParts = path.split("/");

  let testName = pathParts.at(-1);
  if (!testName) {
    throw new Error("Could not determine file name for test dir: " + path);
  }
  if (testName.endsWith(".js")) {
    testName = testName.slice(0, -3);
  }

  const pathWithoutFile = pathParts.slice(0, -1).join("/");

  // console.log("Creating test file", pathWithoutFile, ",", fileName);

  const contents = createTestFileContents(
    pathWithoutFile,
    tests.map((test) => test.substring(pathWithoutFile.length)),
    path.split("/").length - 1,
  );

  mkdirSync(`${outDir}/${pathWithoutFile}`, { recursive: true });

  const fileName = `${testName}.test.ts`;
  const { code: output } = await format(fileName, contents);
  writeFileSync(`${outDir}/${pathWithoutFile}/${fileName}`, output, "utf-8");
}

function createTestFileContents(prefix: string, tests: string[], depth: number) {
  const relativeImportPath = "../".repeat(depth + 1);

  const rawTree = fileTree(tests);
  // The root folder in the tree matches the file name — unwrap to avoid redundant describe()
  const tree = rawTree.length === 1 && isFileTreeFolder(rawTree[0]) ? rawTree[0].children : rawTree;
  const content = tree.map((item) => writeTreeItem(item, prefix)).join("\n\n");

  const hasDescribe = tree.some(isFileTreeFolder);

  return [
    `import { it${hasDescribe ? ", describe" : ""} } from "vitest";`,
    `import { createTestHandler } from "${relativeImportPath}create-test-handler.js";`,
    ``,
    content,
    ``,
  ].join("\n");
}

function writeTreeItem(item: FileTreeItem, prefix: string): string {
  if (isFileTreeFile(item)) {
    const filePath = getTest262Path(join("test", prefix, item.filePath));
    const test = Test262File.fromFile(filePath);
    if (isTestIgnored(test)) {
      return `it.skip(${JSON.stringify(item.fileName)}, () => { /* Ignored Test */ });`;
    }

    const baseline = isTestBaseline(test);
    let tags = [];
    if (baseline) {
      tags.push("known-passing");
    } else {
      tags.push("known-failing");
    }

    return `it(${JSON.stringify(item.fileName)}, { tags: ${JSON.stringify(tags)} }, createTestHandler(${JSON.stringify(`${prefix}/${item.filePath}`)}));`;
  }

  if (isFileTreeFolder(item)) {
    const items: string[] = [];
    items.push(`describe(${JSON.stringify(item.folderName)}, () => {`);

    for (const child of item.children) {
      items.push(writeTreeItem(child, prefix));
    }

    items.push("});");

    return items.join("\n");
  }

  return "";
}

interface FileTreeFile {
  fileName: string;
  filePath: string;
}
function isFileTreeFile(item: FileTreeItem): item is FileTreeFile {
  return "fileName" in item;
}

interface FileTreeFolder {
  folderName: string;
  folderPath: string;
  children: FileTreeItem[];
}
function isFileTreeFolder(item: FileTreeItem): item is FileTreeFolder {
  return "folderName" in item;
}

type FileTreeItem = FileTreeFile | FileTreeFolder;

function fileTree(tests: string[]): FileTreeItem[] {
  const root: FileTreeFolder = { folderName: "", folderPath: "", children: [] };
  for (const test of tests) {
    const path = test.startsWith("/") ? test.substring(1) : test;
    if (path) {
      insertIntoFolder(root, path, "");
    }
  }
  return root.children;
}

function insertIntoFolder(
  folder: FileTreeFolder,
  remainingPath: string,
  currentPath: string,
): void {
  const slashIdx = remainingPath.indexOf("/");
  if (slashIdx === -1) {
    folder.children.push({ fileName: remainingPath, filePath: join(currentPath, remainingPath) });
    return;
  }

  const segment = remainingPath.substring(0, slashIdx);
  const rest = remainingPath.substring(slashIdx + 1);
  const childPath = join(currentPath, segment);

  let child = folder.children.find(
    (item): item is FileTreeFolder => isFileTreeFolder(item) && item.folderName === segment,
  );

  if (!child) {
    child = { folderName: segment, folderPath: childPath, children: [] };
    folder.children.push(child);
  }

  insertIntoFolder(child, rest, childPath);
}
