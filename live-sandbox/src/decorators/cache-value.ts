export default function CacheValue<T>() {
  const cache = new WeakMap<object, T>();

  return function (getter: Function, context: ClassGetterDecoratorContext) {
    if (context.kind !== "getter") {
      throw new Error(
        `@Cache can only be used on getters, not ${context.kind}.`
      );
    }

    return function (this: object): T {
      if (!cache.has(this)) {
        const value = getter.call(this);
        cache.set(this, value);
      }

      return cache.get(this)!;
    };
  };
}
