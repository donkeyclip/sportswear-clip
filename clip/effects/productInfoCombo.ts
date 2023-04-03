import { CSSEffect, Combo} from "@donkeyclip/motorcortex";
export const productInfoCombo = (selector) =>
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
            selector:".product-description",
            duration: 300,
          },
          
          position: 300,
        },
        {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "0%",
              },
              initialValues: {
                left: "100%",
              },
            },
            props: {
              selector:".product-title",
              duration: 300,
            },
            
            position: 300,
          },
        {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                width: "76px",
              },
              initialValues: {
                width: "0px",
              },
            },
            props: {
              selector:".variant",
              delay:"@stagger(0,300)",
              duration: 100,
            },
            position: 500,
        },
        {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                height: "76px",
              },
              initialValues: {
                height: "0px",
              },
            },
            props: {
              selector:".variant",
              delay:"@stagger(0,300)",
              duration: 100,
            },
            position: 500,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
             transform: {
              scale:1
             },
            },
            initialValues: {
              transform: {
                scale:0
               },
            },
          },
          props: {
            selector:".price-wrapper",
            duration: 100,
          },
          
          position: 900,
        },
        {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "-100%",
              },
              initialValues: {
                left: "0%",
              },
            },
            props: {
              selector:".product-title",
              duration: 200,
            },
            
            position: 3500,
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
              selector:".product-description",
              duration: 100,
            },
            
            position: 3500,
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
              selector:".variants-price",
              duration: 100,
            },
            
            position: 3500,
          },
      ],
    },
    {
      selector,//product-info
      delay: "@expression(index *4000)",
    }
  );