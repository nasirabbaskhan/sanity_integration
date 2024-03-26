import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const getBlogFromSanity = async () => {
  const blog = await client.fetch(
    '*[_type=="blog"]',
    {},
    {
      cache: "no-cache",
    }
  );

  return blog;
};
getBlogFromSanity();

export default async function Blog() {
  const blogs = await getBlogFromSanity();
  // console.log("nasirData", blogs);

  return (
    <div>
      <div className="gap-3 border  flex">
        {blogs.map((item: any, index: any) => {
          return (
            <div key={index} className="border w-1/3 mt-10 ">
              <div className="bg-slate-600 py-7 ">
                <Image
                  src={urlForImage(item.image).url()}
                  className="w-36 h-36 mx-auto rounded-full bg-slate-500 "
                  width={100}
                  height={100}
                  alt={item.image.alt}
                />
              </div>
              <div className="px-4">
                <div className="mt-3 text-2xl text-center"> {item.title}</div>

                <br />
                <div>{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
