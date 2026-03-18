import { execSync } from "node:child_process";
import { relative } from "node:path";

let packagees;
function getPackages() {
  if (!packagees) {
    const output = execSync("pnpm list --depth=0 --json").toString();
    const { packages } = JSON.parse(output);
    packagees = packages;
  }
  return packagees;
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
