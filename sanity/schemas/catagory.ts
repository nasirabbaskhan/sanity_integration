import { defineField, defineType } from "sanity";

const catagory = defineType({
  name: "catagory",
  title: "Catagory",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Catagory Name",
      type: "string",
    }),
  ],
});
export default catagory;
