import { CSSEffect } from "@donkeyclip/motorcortex";
export const scale = (scale, initialValue,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        scale
      },
      initialValues: {
        scale: initialValue,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
