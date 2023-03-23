import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const itemsCombo = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              filter: "grayscale(0%)",
            },
            initialValues: {
              filter: "grayscale(100%)",
            },
          },
          props: {
            duration: 200,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              filter: "grayscale(100%)",
            },
            initialValues: {
              filter: "grayscale(0%)",
            },
          },
          props: {
            duration: 200,
          },
          position: 3000,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *3000)",
    }
  );