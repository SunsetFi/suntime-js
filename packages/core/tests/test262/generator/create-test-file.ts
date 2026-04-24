import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export function createTestFile(outDir: string, path: string, tests: string[]) {
  const pathParts = path.split("/");

  let fileName = pathParts.at(-1);
  if (!fileName) {
    throw new Error("Could not determine file name for test dir: " + path);
  }
  if (fileName.endsWith(".js")) {
    fileName = fileName.slice(0, -3);
  }

  const pathWithoutFile = pathParts.slice(0, -1).join("/");

  // console.log("Creating test file", pathWithoutFile, ",", fileName);

  const contents = createTestFileContents(
    pathWithoutFile,
    tests.map((test) => test.substring(pathWithoutFile.length)),
    path.split("/").length - 1,
  );

  mkdirSync(`${outDir}/${pathWithoutFile}`, { recursive: true });
  writeFileSync(`${outDir}/${pathWithoutFile}/${fileName}.test.ts`, contents, "utf-8");
}

function createTestFileContents(prefix: string, tests: string[], depth: number) {
  const relativeImportPath = "../".repeat(depth + 1);

  const tree = fileTree(tests);
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
    return `it(${JSON.stringify(item.fileName)}, createTestHandler(${JSON.stringify(`${prefix}/${item.filePath}`)}));`;
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

function fileTree(tests: string[], parentPath: string = ""): FileTreeItem[] {
  const files: FileTreeFile[] = [];
  const folders = new Map<string, FileTreeItem>();
  for (let test of tests) {
    if (test.startsWith("/")) {
      test = test.substring(1);
    }
    if (!test) {
      throw new Error("Unexpected empty test path");
    }

    const [first, ...rest] = test.split("/");
    if (rest.length === 0) {
      files.push({
        fileName: first,
        filePath: join(parentPath, first),
      });
      continue;
    }

    for (const child of fileTree([rest.join("/")], join(parentPath, first))) {
      if (!folders.has(first)) {
        folders.set(first, {
          folderName: first,
          folderPath: join(parentPath, first),
          children: [],
        });
      }

      const folder = folders.get(first);
      if (!folder || "fileName" in folder) {
        throw new Error("Expected folder, got file");
      }

      folder.children.push(child);
    }
  }

  return [...folders.values(), ...files];
}
