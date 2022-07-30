import React, { useContext } from "react";
import { useProductDispatch, useProductState } from "../../pages/_app";
import Image from "next/image";
import { useRouter } from "next/router";

const AddToCart = ({ item }: { item: any }) => {
  const router = useRouter();
  const { query, pathname } = router;
  const dispatch = useProductDispatch();
  const { products } = useProductState();
  const modifyCount = (val: number) => {
    const temp = products.map((k: any) => {
      if (k.id == item.id) {
        if (val === 0) {
          k.count = 1;
        } else if (val === -1) {
          k.count -= 1;
        } else if (val === 1) {
          k.count += 1;
        }
      }
      return k;
    });
    dispatch({ type: "add-or-remove-item", products: temp });
  };
  const isNotAvailable = !item.available;
  return (
    <div
      className={`w-full border border-[#1d7cbf] ${
        pathname === "/the-mart/cart" ? "rounded-4" : " rounded-b-4"
      } font-bold ${
        isNotAvailable
          ? "cursor-not-allowed"
          : "cursor-pointer hover:bg-[#f1f1f1]"
      }`}
    >
      {item.count == 0 ? (
        <>
          {isNotAvailable ? (
            <div className="w-full flex items-center justify-center space-x-8 hover:bg-[#fff2f6] text-center text-[#D61C4E] py-8 cursor-none">
              <Image
                src="/circle-exclamation-solid.svg"
                width={16}
                height={16}
                alt="error icon"
              />
              <div>Item Out Of Stock</div>
            </div>
          ) : (
            <div
              onClick={() => {
                modifyCount(0);
              }}
              className="w-full text-center text-[#1d7cbf] py-8"
            >
              Add to Cart
            </div>
          )}
        </>
      ) : (
        <div className="w-full text-center grid grid-cols-4 ">
          <div
            onClick={() => {
              modifyCount(-1);
            }}
            className="col-span-1 py-8 bg-[#1d7cbf] flex justify-center items-center hover:bg-[#24a0f9]"
          >
            <div className="h-2 w-10 bg-[#fff] "></div>
          </div>
          <div className="col-span-2 flex items-center justify-center bg-[#fff]">
            {item.count}
          </div>
          <div
            onClick={() => {
              modifyCount(1);
            }}
            className="col-span-1 py-8 bg-[#1d7cbf] hover:bg-[#24a0f9] text-[#fff] flex justify-center items-center"
          >
            +
          </div>
        </div>
      )}
    </div>
  );
};
export default AddToCart;
