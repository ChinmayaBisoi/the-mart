import React from "react";
import { useProductState } from "../../pages/_app";
import ProductItem from "./product-item";
import Image from "next/image";

const Products = () => {
  const { products, selectedCategory } = useProductState();
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((item: any) => {
          return item.category === selectedCategory;
        });
  return (
    <div className="md:col-span-8 col-span-full md:py-20 py-20 md:px-0 px-16">
      <div className="flex space-x-4 items-center text-24 text-[#1d7cbf] md:pl-20 pb-10">
        <div className=" ">Products</div>
        <div className="pt-10">
          <Image
            src={"/caret-right-solid.svg"}
            width={20}
            height={25}
            alt="chevron"
          />
        </div>
        <div className="">{selectedCategory}</div>
      </div>
      <div className="grid md:grid-cols-2 md:pl-20 md:gap-x-20 md:gap-y-30 gap-y-30">
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((item: any) => {
              return <ProductItem item={item} />;
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Products;
