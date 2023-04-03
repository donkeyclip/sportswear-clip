import { CSSEffect, Combo} from "@donkeyclip/motorcortex";
export const productImageCombo = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            duration: 300,
          },
          
          position: 0,
        },
        {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                opacity: 0,
              },
              initialValues: {
                opacity: 1,
              },
            },
            props: {
              duration: 90,
            },
            
            position: 4010,
          },
       
      ],
    },
    {
      selector,
      delay: "@expression(index *4000)",
    }
  );