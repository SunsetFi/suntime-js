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

export function lintStagedWorkspaceCommand(packageName, command) {
  const packages = getPackages();
  const packageInfo = packages.find((pkg) => pkg.name === packageName);
  if (!packageInfo) {
    throw new Error(`Package ${packageName} not found`);
  }

  return (paths) => {
    return `${command} ${paths
      .map((path) => relative(process.cwd(), path))
      .join(" ")}`;
  };
}
