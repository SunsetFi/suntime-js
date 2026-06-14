#!/usr/bin/env node
// Publishes each workspace package under packages/* with a dist-tag resolved
// by resolve-dist-tag.mjs. Skips packages already present on npm at their
// current version (idempotent re-runs). Honors --dry-run.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { execFileSync } from "node:child_process";

import { getPackages } from "./get-packages.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, "..");
const DRY = process.argv.includes("--dry-run");

const PACKAGES = getPackages()
  .filter((x) => !x.private)
  .map((pkg) => pkg.path);

console.log(
  `Publishing ${PACKAGES.length} packages${DRY ? " (dry run)" : ""}...`,
);

function resolveTag(pkgDir) {
  return execFileSync(
    "node",
    [join(scriptDir, "resolve-dist-tag.mjs"), join(root, pkgDir)],
    { encoding: "utf8" },
  ).trim();
}

function alreadyPublished(name, version) {
  try {
    execFileSync("pnpm", ["view", `${name}@${version}`, "version"], {
      stdio: ["ignore", "pipe", "ignore"],
    });
    return true;
  } catch {
    return false;
  }
}

for (const pkgDir of PACKAGES) {
  const { name, version } = JSON.parse(
    readFileSync(resolve(root, pkgDir, "package.json"), "utf8"),
  );

  if (alreadyPublished(name, version)) {
    console.log(`skip   ${name}@${version} (already on npm)`);
    continue;
  }

  const tag = resolveTag(pkgDir);
  const args = [
    "publish",
    "--filter",
    name,
    "--tag",
    tag,
    "--access",
    "public",
    "--no-git-checks",
  ];

  console.log(`${DRY ? "DRY   " : "publish"} ${name}@${version} --tag ${tag}`);
  if (DRY) {
    console.log(`        pnpm ${args.join(" ")}`);
    continue;
  }
  execFileSync("pnpm", args, { stdio: "inherit", cwd: root });
}
