import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProductState } from "../../pages/_app";

const TopNav = () => {
  const { products } = useProductState();
  const totalItems = products.reduce((acc: any, curr: any) => {
    return (acc += curr.count);
  }, 0);

  return (
    <div className="bg-[#F1F1F1] py-14 grid grid-cols-12 px-16 md:px-0 sticky top-0 z-100">
      <div className="md:col-span-10 md:col-start-2 col-span-full flex justify-between items-center">
        <Link href="/the-mart">
          <div className="flex items-center space-x-4 cursor-pointer">
            <Image
              src={"/the-mart-logo.svg"}
              alt="happay-logo.svg"
              width={36}
              height={36}
            />

            <div className="text-[#1d7cbf] text-24">Mart</div>
          </div>
        </Link>
        <div className="flex items-center space-x-12 divide-x ">
          <Link href="/the-mart">
            <div className=" flex items-center justify-end space-x-6 cursor-pointer">
              <Image
                src="/house-user-solid.svg"
                width={24}
                height={24}
                alt="home-icon"
              />
              <div className="text-[#1d7cbf]">Home</div>
            </div>
          </Link>

          <div className="flex items-center space-x-16">
            <Link href={"/the-mart/cart"}>
              <div className="flex items-center justify-center cursor-pointer pl-6">
                <div className="cursor-pointer relative w-36 h-36 p-6 rounded-full flex items-center justify-center ">
                  <Image
                    src={"/cart.svg"}
                    alt="cart.svg"
                    width={45}
                    height={45}
                  />
                  {!!totalItems && (
                    <div className="z-10 absolute top-0 text-10 right-0 w-16 text-center rounded-full text-text-white bg-[#D61C4E]">
                      {totalItems}
                    </div>
                  )}
                </div>
                <div className="text-[#1d7cbf]">Cart</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
