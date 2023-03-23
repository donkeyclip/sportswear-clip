import { HTMLClip } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import { top } from "./effects/top";
import { left } from "./effects/left";
import { width } from "./effects/width";

import { widthHeight } from "./effects/widthHeight";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { opacity } from "./effects/opacity";

import { itemsCombo } from "./itemsCombo";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
});

clip.addIncident(
  widthHeight("236px", "148px", ".title-wrapper", 200, "@stagger(0,200)"),
  0
);
clip.addIncident(
  widthHeight("511px", "286px", ".description-container", 200),
  600
);
clip.addIncident(
  widthHeight("218px", "218px", ".image", 200, "@stagger(0,200)"),
  900
);

// //clip.addIncident(scale(".title-wrapper",200,"@stagger(0,300)"),0);
// //clip.addIncident(scale(".description-container",200),600);
// //clip.addIncident(scale(".image",200,"@stagger(0,300)"),900);

clip.addIncident(top("280px", ".right-container", 100), 500);
clip.addIncident(top("167px", ".right-container", 100), 800);

clip.addIncident(left("1017px", ".right-container", 300), 1400);
clip.addIncident(widthHeight("429px", "748px", ".left-container", 400), 1700);

clip.addIncident(width("1434px", ".left-container", 300), 2700);
clip.addIncident(left("243px", ".left-container", 300), 2700);

clip.addIncident(opacity(0, ".center-image", 200), 3400);

clip.addIncident(itemsCombo(".item-image"), 4000);
clip.addIncident(
  opacity(1, ".product-image", 200, "@expression(index*3000)"),
  4000
);

export { clip };
