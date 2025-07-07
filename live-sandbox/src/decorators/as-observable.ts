import { Observable } from "rxjs";

export default function AsObservable<T extends Observable<unknown>>() {
  return function (getter: Function, context: ClassGetterDecoratorContext) {
    if (context.kind !== "getter") {
      throw new Error(
        `@AsObservable can only be used on getters, not ${context.kind}.`
      );
    }

    return function (this: object): T {
      let value = getter.call(this);
      if (hasAsObservable(value)) {
        value = value.asObservable();
      }

      return value;
    };
  };
}

type HasAsObservable<T> = {
  asObservable(): Observable<T>;
};
function hasAsObservable(value: unknown): value is HasAsObservable<unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    "asObservable" in value &&
    typeof (value as HasAsObservable<unknown>).asObservable === "function"
  );
}
