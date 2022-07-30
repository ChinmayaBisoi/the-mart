import React from "react";
import Image from "next/image";
import AddToCart from "./add-to-cart";

const ProductItem = ({ item }: { item: any }) => {
  const imgUrl = item.imgUrl;
  const isNotAvailable = !item.available;
  return (
    <div className="flex flex-col relative rounded-4">
      <div
        className={`relative w-full h-200 rounded-t-4  border border-b-none border-[#a1a1a1] `}
      >
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          objectPosition={"center"}
          className={`rounded-t-4 ${isNotAvailable ? "opacity-20" : ""} `}
        />
      </div>
      <div className="py-4 px-8 border border-t-none border-b-none border-[#a1a1a1]">
        <div className="flex justify-between">
          <div className="text-18">{item.name}</div>
          <div className="flex items-center">
            <Image
              src="/indian-rupee-sign-solid.svg"
              width={16}
              height={16}
              alt="rupee sign"
            />
            <div className="pl-4 text-20">{item.price}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-18">Vendor : </div>
          <div className="pl-10 text-16">{item.vendor}</div>
        </div>
      </div>
      <AddToCart item={item} />
    </div>
  );
};

export default ProductItem;
