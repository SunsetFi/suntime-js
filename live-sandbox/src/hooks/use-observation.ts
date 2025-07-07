import React from "react";
import { Observable } from "rxjs";

export interface UseObservationOpts {
  useTransition?: boolean;
  onError?: ((err: unknown) => void) | "return";
}
export function useObservation<T>(
  observable: Observable<T> | T | null | undefined,
  { useTransition, onError }: UseObservationOpts = {}
): T | undefined {
  const [val, setVal] = React.useState<T | undefined>(undefined);

  React.useLayoutEffect(() => {
    if (observable) {
      if (observable instanceof Observable) {
        // Reset the value as the observable has changed.
        setVal(undefined);
        const subscription = observable.subscribe({
          next(val) {
            if (useTransition) {
              React.startTransition(() => setVal(val));
            } else {
              setVal(val);
            }
          },
          error(e) {
            if (onError === "return") {
              setVal(e);
            } else if (typeof onError === "function") {
              onError(e);
            } else {
              console.error("Error in observable:", e);
            }
          },
        });
        return () => subscription.unsubscribe();
      } else {
        setVal(observable);
      }
    }
  }, [observable, onError, useTransition]);

  return val;
}
