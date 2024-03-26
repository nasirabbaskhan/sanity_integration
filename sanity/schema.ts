import { type SchemaTypeDefinition } from "sanity";
import services from "./schemas/services";
import blog from "./schemas/blog";
import products from "./schemas/products";

import catagory from "./schemas/catagory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, blog, products, catagory],
};
