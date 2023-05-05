export default {
  backgroundColor:{ type: "color" },
  primaryColor:{ type: "color" },
  secondaryColor:{ type: "color" },
  fontColor:{ type: "color" },
  title:{ type: "string" },
  image1:{ type: "string" },
  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        image: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        variants: {
          type: "array",
          items: {
            type:"string"

          },
        },
        price: { type: "string" },
        url: { type: "string" },
      },
    },
  },
};
