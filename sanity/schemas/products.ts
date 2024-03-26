import { defineField, defineType } from "sanity";

const products = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "catagory",
      title: "Catagory",
      type: "reference",
      to: [
        {
          type: "catagory",
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alternative Keywords",
          type: "string",
        },
      ],
    }),
  ],
});
export default products;
