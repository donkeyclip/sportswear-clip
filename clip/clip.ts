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
  widthHeight("236px", "148px", ".title-wrapper", 300, "@stagger(0,200)",[0.77,0,0.18,1]),
  0
);
clip.addIncident(
  opacity(1, ".title", 10, "@stagger(0,200)",[0.77,0,0.18,1]),
  400
);
clip.addIncident(
  widthHeight("511px", "286px", ".description-container", 300,0,[0.77,0,0.18,1]),
  1000
);
clip.addIncident(
  opacity(1, ".description-title", 10,0,[0.77,0,0.18,1]),
  1350
);
clip.addIncident(
  widthHeight("218px", "218px", ".image", 300, "@stagger(0,350)",[0.77,0,0.18,1]),
  1700
);

clip.addIncident(top("280px", ".right-container", 100,0,[0.77,0,0.18,1]), 900);
clip.addIncident(top("167px", ".right-container", 100,0,[0.77,0,0.18,1]), 1410);

clip.addIncident(left("1017px", ".right-container", 200,0,[0.77,0,0.18,1]), 2400);
clip.addIncident(widthHeight("429px", "749px", ".left-container", 400,0,[0.77,0,0.18,1]), 2800);

clip.addIncident(width("1434px", ".left-container", 300,0,[0.77,0,0.18,1]), 4200);
clip.addIncident(left("243px", ".left-container", 300,0,[0.77,0,0.18,1]), 4200);

clip.addIncident(opacity(0, ".center-image,.right-container", 200,0,[0.77,0,0.18,1]), 4900);

clip.addIncident(itemsCombo(".item-image"), 5500);
clip.addIncident(productInfoCombo(".product-info"), 5500);
clip.addIncident(
  productImageCombo(".left-container .product-image"),
  5500
);

clip.addIncident(
  opacity(1, ".item-image", 200,0,[0.77,0,0.18,1]),5100
);


clip.addIncident(
  opacity(0,".products-images", 200,"@expression(initParams.products.length*4000)",[0.77,0,0.18,1]),5500
);


clip.addIncident(
  opacity(1,".outro .product-image", 300,"@expression(initParams.products.length*4000)",[0.77,0,0.18,1]),5800
);

export { clip };

