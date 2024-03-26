import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Image as IImage } from "sanity";
import Wrapper from "../components/wraper";
import Button from "../components/Button";

const getProductsFromSanity = async () => {
  const products = await client.fetch(
    '*[_type=="product"]',
    {},

    { cache: "no-cache" }
  );
  return products;
};

interface Iproduct {
  title: string;
  _id: string;
  description: string;
  image: IImage;
  price: number;
  catagory: {
    name: string;
  };
}

export default async function Products() {
  const products: Iproduct[] = await getProductsFromSanity();
  console.log("AneelaResponse", products);
  return (
    <Wrapper>
      <div className="main  flex justify-center gap-x-28">
        {products.map((item: any, ind: any) => {
          return (
            <div id="ind" className="">
              <Image
                className="max-h-[300px] object-cover object-top "
                src={urlForImage(item.image).url()}
                width={250}
                height={200}
                alt="image"
              />
              <h2 className="text-[18px] mt-1 ">{item.title}</h2>
              <h2 className="text-xl mt-1 ">{item.price}</h2>
              <Button text="Add to Cart" />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
{
  /* <p>{item.title}</p>
            <br />
            <p>{item.description}</p>
            <br /> */
}
{
  /* //<p>alt:{item.image.alt}</p> */
}
{
  /* <br /> */
}
{
  /* <p>{item.catagory.name}</p> */
}

{
  /* <p>{item.catagory._ref}</p> */
}
{
  /* <br />
            <hr /> */
}
