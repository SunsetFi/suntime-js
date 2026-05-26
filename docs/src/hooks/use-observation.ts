import React from "react";
import { Observable } from "rxjs";

import useLatest from "./use-latest";

export interface UseObservationOpts {
  useTransition?: boolean;
  onError?: ((err: unknown) => void) | "return";
}

export default function useObservation<T>(
  observable: Observable<T> | T | null | undefined,
  opts: UseObservationOpts & { onError: "return" },
  deps?: React.DependencyList,
): T | Error | undefined;
export default function useObservation<T>(
  observable: Observable<T> | T | null | undefined,
  opts?: UseObservationOpts,
  deps?: React.DependencyList,
): T | undefined;
export default function useObservation<T>(
  observable: Observable<T> | T | null | undefined,
  { useTransition, onError }: UseObservationOpts = {},
  deps?: React.DependencyList,
): T | undefined {
  const [val, setVal] = React.useState<T | undefined>(undefined);

  if (!deps) {
    deps = [observable];
  }

  const onErrorRef = useLatest(onError);
  const useTransitionRef = useLatest(useTransition);

  React.useLayoutEffect(() => {
    if (observable) {
      if (observable instanceof Observable) {
        // Reset the value as the observable has changed.
        // This is needed for cold observables that won't produce a value instantly,
        // as otherwise we would preserve the last observable's value indefinitely.
        setVal(undefined);

        const subscription = observable.subscribe({
          next(val) {
            if (useTransitionRef.current) {
              React.startTransition(() => setVal(val));
            } else {
              setVal(val);
            }
          },
          error(e) {
            if (onErrorRef.current === "return") {
              if (e instanceof Error === false) {
                e = new Error(String(e));
              }
              setVal(e);
            } else if (typeof onErrorRef.current === "function") {
              onErrorRef.current(e);
            } else {
              console.error("Error in observable:", e);
            }
          },
        });

        return () => {
          subscription.unsubscribe();
        };
      } else {
        setVal(observable);
      }
    }
  }, [...deps]);

  return val;
}
