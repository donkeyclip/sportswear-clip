export default {
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
