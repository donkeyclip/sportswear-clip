import { CSSEffect,setCSSCore } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
setCSSCore(AnimePluginDefinition.CSSEffect);

export const widthHeight = (width,height,selector, duration,delay=0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width,
        height
      },
      initialValues: {
        width: "0px",
        height: "0px"
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
