import { describe } from "vitest";

export default function describePath(pathSegments: string[], body: () => void) {
  const run = (index: number) => {
    if (index >= pathSegments.length) {
      body();
      return;
    }

    const name = pathSegments[index];
    describe(name, () => run(index + 1));
  };

  run(0);
}
