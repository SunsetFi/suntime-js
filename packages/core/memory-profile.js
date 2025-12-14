import { StaticJsRealm } from "./lib/index.js";

function toMb(bytes) {
  return bytes / (1024 * 1024) + " MB";
}

const realm = StaticJsRealm();

const preRunMemory = process.memoryUsage().heapTotal;
console.log(`Initial memory usage: ${toMb(preRunMemory)}`);

const count = 5_000_000;

// Array overhead (5 million unique numbers): 18 bytes per item.
const arrayOverhead = 18 * count;

// Objects: 260 bytes each when empty.  324 bytes with a single null property, 388 with 2 null properties.
//   64 bytes per property for property names ~5 characters long ~ 12 bytes per character
//   420 bytes total with 1 key ~10 characters long = 160 byte property ~ 16 bytes per character.
//   428 bytes total with 1 unique key 32 characters long
//   A raw JS Map is 195 bytes when empty = 65 bytes for 'the rest of the object'.
//   A raw object is 68 bytes
// Strings: 52 bytes for empty string.  84 bytes for 10 characters.  228 bytes for 32 characters.
// Numbers: 52 bytes each

global.gc();

let items = [];
for (let i = 0; i < count; i++) {
  // const value = i.toString().padStart(32, "0");
  if (i % 100000 === 0) {
    console.log(`Created ${i.toLocaleString()} objects`);
  }
  items.push({});
}

global.gc();

const postRunMemory = process.memoryUsage().heapTotal;

const memoryUsedByObjects = postRunMemory - preRunMemory - arrayOverhead;
const memoryPerObject = memoryUsedByObjects / count;
console.log(
  `Memory used to store ${count.toLocaleString()} objects: ${toMb(memoryUsedByObjects)}`
);
console.log(`Memory used per object: ${memoryPerObject} bytes`);

items.length = 0;

global.gc();

const finalMemory = process.memoryUsage().heapTotal;
console.log(`Final memory usage: ${toMb(finalMemory)}`);
