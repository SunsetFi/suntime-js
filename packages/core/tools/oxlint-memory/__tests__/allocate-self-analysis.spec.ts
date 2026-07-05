import { describe, expect, it } from "vitest";

import { analyzeAllocSelf } from "./program-fixture.js";

describe("allocate-self analyzer", () => {
  it("reports nothing for a non-markable class", async () => {
    const v = await analyzeAllocSelf(`class Foo extends PlainClass {}`);
    expect(v).toEqual([]);
  });

  it("reports nothing for a compliant markable class", async () => {
    const v = await analyzeAllocSelf(`
      class Good extends AbstractMarkable {
        static create(): Good { return allocated(new Good()); }
        protected constructor() { super(); }
      }
    `);
    expect(v).toEqual([]);
  });

  it("flags this.allocateSelf() inside a constructor", async () => {
    const v = await analyzeAllocSelf(`
      class Bad extends AbstractMarkable {
        static create(): Bad { return allocated(new Bad()); }
        protected constructor() { super(); this.allocateSelf(); }
      }
    `);
    expect(v).toHaveLength(1);
    expect(v[0].message).toMatch(/allocateSelf.*constructor/i);
  });

  it("flags this.allocateSelf() inside a field initializer", async () => {
    const v = await analyzeAllocSelf(`
      class Bad extends AbstractMarkable {
        x = this.allocateSelf();
        static create(): Bad { return allocated(new Bad()); }
        protected constructor() { super(); }
      }
    `);
    expect(v).toHaveLength(1);
  });

  it("flags a public (unmarked) constructor on a markable class", async () => {
    const v = await analyzeAllocSelf(`
      class Bad extends AbstractMarkable {
        static create(): Bad { return allocated(new Bad()); }
        constructor() { super(); }
      }
    `);
    expect(v.some((x) => /constructor.*protected/i.test(x.message))).toBe(true);
  });

  it("accepts a private constructor", async () => {
    const v = await analyzeAllocSelf(`
      class Good extends AbstractMarkable {
        static create(): Good { return allocated(new Good()); }
        private constructor() { super(); }
      }
    `);
    expect(v).toEqual([]);
  });

  it("flags `new C` outside any create method", async () => {
    const v = await analyzeAllocSelf(`
      class C extends AbstractMarkable {
        static create(): C { return allocated(new C()); }
        protected constructor() { super(); }
      }
      const leak = new C();
    `);
    expect(v.some((x) => /must be constructed via .*create/i.test(x.message))).toBe(true);
  });

  it("flags `new C` inside create but not wrapped by allocated()", async () => {
    const v = await analyzeAllocSelf(`
      class C extends AbstractMarkable {
        static create(): C { return new C(); }
        protected constructor() { super(); }
      }
    `);
    expect(v.some((x) => /allocated\(\)/.test(x.message))).toBe(true);
  });

  it("accepts `new C` inside create wrapped by allocated()", async () => {
    const v = await analyzeAllocSelf(`
      class C extends AbstractMarkable {
        static create(): C { return allocated(new C()); }
        protected constructor() { super(); }
      }
    `);
    expect(v).toEqual([]);
  });

  it("does not flag super() calls in subclasses", async () => {
    const v = await analyzeAllocSelf(`
      class Base extends AbstractMarkable {
        static create(): Base { return allocated(new Base()); }
        protected constructor() { super(); }
      }
      class Sub extends Base {
        static create(): Sub { return allocated(new Sub()); }
        protected constructor() { super(); }
      }
    `);
    expect(v).toEqual([]);
  });

  it("flags a non-abstract markable class with no static create", async () => {
    const v = await analyzeAllocSelf(`
      class NoCreate extends AbstractMarkable {
        protected constructor() { super(); }
      }
    `);
    expect(v.some((x) => /must declare a static 'create'/i.test(x.message))).toBe(true);
  });

  it("does not require create on an abstract markable class", async () => {
    const v = await analyzeAllocSelf(`
      abstract class AbstractMid extends AbstractMarkable {
        protected constructor() { super(); }
      }
    `);
    expect(v).toEqual([]);
  });
});
