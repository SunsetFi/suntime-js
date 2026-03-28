export const testPathKeySeparator = "\u0000";

export default function normalizeTestPathParts(testPathParts: string[]) {
  const pathItems = testPathParts.slice(0, -1);
  const testName = testPathParts.at(-1);

  if (!testName) {
    return pathItems.join(testPathKeySeparator);
  }

  if (!["strict", "non-strict"].includes(testName)) {
    pathItems.push(testName);
  }

  return pathItems.join(testPathKeySeparator);
}
