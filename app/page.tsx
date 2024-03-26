import { client } from "@/sanity/lib/client";
//import Image from "next/image";

const getServicesFromSanity = async () => {
  const services = await client.fetch('*[_type=="services"]');
  return services;
};

export default async function Home() {
  const services = await getServicesFromSanity();
  // console.log("nasirResponse", services);
  // console.log("nasir");
  return (
    <>
      <p>Get data from sanity</p>
      {services.map((item: any, ind: any) => {
        return (
          <div key={ind}>
            Title:{item.title}
            descrtiption:{item.description}
            <hr />
          </div>
        );
      })}
    </>
  );
}
