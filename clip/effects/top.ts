import { CSSEffect } from "@donkeyclip/motorcortex";
export const top = (top,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
          top,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
