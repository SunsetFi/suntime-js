import { execSync } from "node:child_process";
import { relative } from "node:path";

let packages;
function getPackages() {
  if (!packages) {
    const output = execSync("pnpm list -r --depth -1 --json").toString();
    packages = JSON.parse(output);
  }
  return packages;
}

export function lintStagedWorkspaceRunner(packageName) {
  const packages = getPackages();
  const packageInfo = packages.find((pkg) => pkg.name === packageName);
  if (!packageInfo) {
    throw new Error(`Package ${packageName} not found`);
  }

  return (command) => {
    return (paths) => {
      return `pnpm run --filter ${packageName} ${command} ${paths
        .map((path) => relative(packageInfo.path, path))
        .join(" ")}`;
    };
  };
}
