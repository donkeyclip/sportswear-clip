import { CSSEffect } from "@donkeyclip/motorcortex";
export const scale = (selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
          scale: 1,
      },
      initialValues: {
        scale: 0,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
