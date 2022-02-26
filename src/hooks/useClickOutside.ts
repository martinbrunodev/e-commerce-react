import { MutableRefObject, useEffect } from "react";

export const useClickOutside = (
  refs: MutableRefObject<HTMLElement | null>[],
  callback: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const { target } = event;
      if (
        !refs.some(
          (ref) =>
            ref.current && target && ref.current?.contains(target as Node)
        )
      )
        callback();
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, [callback, refs]);
};
