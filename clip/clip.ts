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
import { itemsCombo } from "./effects/itemsCombo";
import { productInfoCombo } from "./effects/productInfoCombo";
import { productImageCombo } from "./effects/productImageCombo";
import { scale } from "./effects/scale";

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
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Inter:wght@500;900&display=swap",
    },
  ],
});

clip.addIncident(
  widthHeight("236px", "148px", ".title-wrapper", 200, "@stagger(0,200)",[1,0,0.17,0.92]),
  0
);
clip.addIncident(
  opacity(1, ".title", 10, "@stagger(0,200)",[1,0,0.17,0.92]),
  200
);
clip.addIncident(
  widthHeight("511px", "286px", ".description-container", 200,0,[1,0,0.17,0.92]),
  600
);
clip.addIncident(
  opacity(1, ".description-content", 10,0,[1,0,0.17,0.92]),
  800
);
clip.addIncident(
  widthHeight("218px", "218px", ".image", 200, "@stagger(0,200)",[1,0,0.17,0.92]),
  900
);

clip.addIncident(top("280px", ".right-container", 100,0,[1,0,0.17,0.92]), 500);
clip.addIncident(top("167px", ".right-container", 100,0,[1,0,0.17,0.92]), 800);

clip.addIncident(left("1017px", ".right-container", 300,0,[1,0,0.17,0.92]), 1400);
clip.addIncident(widthHeight("429px", "749px", ".left-container", 400,0,[1,0,0.17,0.92]), 1700);

clip.addIncident(width("1434px", ".left-container", 300,0,[1,0,0.17,0.92]), 2700);
clip.addIncident(left("243px", ".left-container", 300,0,[1,0,0.17,0.92]), 2700);

clip.addIncident(opacity(0, ".center-image,.right-container", 200,0,[1,0,0.17,0.92]), 3400);

clip.addIncident(itemsCombo(".item-image"), 4000);
clip.addIncident(productInfoCombo(".product-info"), 4000);
clip.addIncident(
  productImageCombo(".product-image"),
  4000
);

clip.addIncident(
  opacity(1, ".item-image", 200,0,[1,0,0.17,0.92]),3600
);

clip.addIncident(
  scale(0, 1,".left-container", 200,"@expression(initParams.products.length*3000)",[1,0,0.17,0.92]),3800
);


export { clip };


