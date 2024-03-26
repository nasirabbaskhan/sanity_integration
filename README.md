# 1.Installing the CLI globally // it already done

npm install --global sanity@latest

# 2. create next-app

npx create-next-app@latest project-name

# 3.run this after creating next-app

1: npm create sanity@latest

if required:

2: " npm i sanity "

3: " npm i @sanity/vision "

4: " npm i next-sanity "

5: "npm run dev"

# 4 After installing sanity focus on only schemas

import { defineField, defineType } from "sanity";

export const Products = defineType({

name: "products",

title: "Products",

type: "document",

fields: [

defineField({

name: "productname",

title: "Product Name",

type: "string",

}),

defineField({

name: "slug",

title: "slug",

type: "slug",

options: {

source: "productname",

maxLength: 200,

slugify: (input: string) =>

input.toLowerCase().replace(/\s+/g, "-").slice(0, 20),

},

}),

defineField({

name: "description",

title: "Description",

type: "array",

of: [

{

type: "block", // for ritch text

},

],

}),

defineField({

name: "price",

title: "Price",

type: "number",

}),

defineField({

name: "producttype",

title: "Product Type",

type: "string",

}),

defineField({

name: "size",

title: "Size",

type: "array",

of: [{ type: "string" }],

}),

defineField({

name: "quantity",

title: "quantity",

type: "number",

}),

defineField({

name: "image",

title: "Image",

type: "array",

of: [

{

type: "image",

fields: [

{

name: "alt",

title: "Alternative Text",

type: "string",

},

],

},

],

}),

],

});

# 4.1 define types of data that you are fething from sanity

import { Image } from "sanity";

export interface IDescription {

level: number;

\_type: string;

style: string;

\_key: string;

listItem: string;

markDefs: any[];

children: any[];

}

export interface Islug {

current: string;

\_type: string;

}

// singleSanityProducstType;

export interface sanityProducstType {

quantity: number;

image: Image[];

producttype: string;

productname: string;

slug: Islug;

description: IDescription[];

size: string[];

price: number;

\_id: string;

}

export interface allSanityProducstType {

query: string;

result: Array<sanityProducstType>;

}

# 5 fech data from sanity

const getServicesFromSanity = async () => {

const services = await client.fetch('\*[_type=="services"]');

return services;

};

# 5 fech data from sanity with each tyme updated

const getBlogFromSanity = async () => {

const blog = await client.fetch(

'\*[_type=="blog"]',

{},

{

cache: "no-cache",

}

);

return blog;

};

# 6 to render image import urlForImage function from "image.ts" from sanity

import { urlForImage } from "@/sanity/lib/image";

<Image
src={urlForImage(item.image).url()}

              width={100}

              height={100}

              alt={item.image.alt}

            />

# 7 to render image write following code in next.config.mjs file to access the image

images:{

remotePatterns:[

{

protocol:"https",

hostname:'cdn.sanity.io',

port:'',

pathname:"/\*\*"

}

]

}

# 8 to render the rich text from sanity

1: 'npm i react-portable-text'

2: import PortableText from "react-portable-text"

3: <PortableText

              className="leading-relaxed"

              content={product.description}

            />

# complete code

const getProductsFromSanity = async () => {

const products = await client.fetch(

'\*[_type=="product"]',

{},

{ cache: "no-cache" } // for each time updated

);

return products;

};

// to render on screen

{products.map((item: any, index:any) => {

return (

<div key={index}>

<p>{item.title}</p>

<br />
<p>{item.description}</p>

<br />
<p>alt:{item.image.alt}</p>

<br />

<p>{item.catagory.name}</p>

<Image
src={urlForImage(item.image).url()}

              width={200}

              height={100}

              alt=""
            />

# this complete code work same

const getProductsFromSanity = async () => {

const products = await client.fetch(

'\*[_type=="product"]{title,description,image{alt},catagory->{name},image}',

{},

{ cache: "no-cache" } // for each time updated

);

return products;

};
// to render on screen

{products.map((item: any,index:any) => {

return (

<div key={index}>

<p>{item.title}</p>

<br />

<p>{item.description}</p>

<br />

<p>alt:{item.image.alt}</p>

<br />

<p>{item.catagory.name}</p>

<Image
src={urlForImage(item.image).url()}

              width={200}

              height={100}

              alt=""
            />
