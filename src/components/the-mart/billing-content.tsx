import Link from "next/link";
import { useProductState } from "../../pages/_app";
import AddToCart from "./add-to-cart";
import Separator from "./seperator";
import Image from "next/image";

const ReceiptItem = ({ qty, price }: { qty: any; price: any }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        {qty} x {price}
      </div>
      <div className="flex ">
        <div className="w-12 h-12">
          <Image
            src="/indian-rupee-sign-solid.svg"
            width={12}
            height={12}
            alt="rupee sign"
          />
        </div>

        <div>{qty * price}</div>
      </div>
    </div>
  );
};

const OrderItem = ({ item, slNo }: { item: any; slNo: any }) => {
  return (
    <div className={` grid grid-cols-4 p-12 items-center`}>
      <div className="">{slNo + 1}</div>
      <div className="">{item.name}</div>
      <div className="col-span-2 pl-16">
        <AddToCart item={item} />
      </div>
    </div>
  );
};

const BillingContent = () => {
  const { products } = useProductState();
  const itemsInCart = products.filter((item: any) => item.count > 0);

  const purchaseDetail = { totalPrice: 0, totalDiscount: 0, totalItems: 0 };
  for (let i = 0; i < itemsInCart.length; i++) {
    const item = itemsInCart[i];
    purchaseDetail.totalItems += item.count;
    purchaseDetail.totalPrice += item.count * item.price;
  }

  return (
    <div className="grid md:grid-cols-12 px-16 md:px-0">
      <div className="md:col-start-2 md:col-span-10 pt-10">
        <div className="col-span-full ">
          <Link href={"/the-mart"}>
            <span className="cursor-pointer">Back to home</span>
          </Link>
        </div>
        {!!purchaseDetail.totalItems ? (
          <div className="col-span-full">
            <div className="pt-20">
              <div className="flex">
                <div>Order Summary : </div>
                {purchaseDetail.totalItems && (
                  <div className="pl-12">
                    {" "}
                    ( {purchaseDetail.totalItems} items )
                  </div>
                )}
              </div>
              <div className="grid md:grid-cols-11 pt-20">
                {/* left box */}
                <div className="md:col-span-6 border border-[#a1a1a1] p-16 md:mr-16">
                  <div className="grid grid-cols-4 pb-12 px-12">
                    <div className="">S.NO.</div>
                    <div className="">ITEMS</div>
                    <div className="col-span-2 text-center">QTY</div>
                  </div>

                  <Separator className="bg-[#a1a1a1]" />
                  <div className="p-12">
                    {itemsInCart.map((item: any, idx: any) => {
                      return <OrderItem key={item.id} slNo={idx} item={item} />;
                    })}
                  </div>
                  <Separator className="bg-[#a1a1a1] mb-12" />

                  <Link href={"/the-mart"}>
                    <span className="mt-12 cursor-pointer p-12 text-[#1d7cbf]">
                      + Add more items
                    </span>
                  </Link>
                </div>
                {/* right box */}
                <div className="md:col-span-5 borer bg-[#f5f5f5] border-slate-300 md:ml-12 mt-20 md:mt-0 p-16">
                  <div className="">Price Details</div>
                  <Separator className="bg-[#a1a1a1] my-12" />
                  <div className="flex flex-col">
                    {itemsInCart.map((item: any, idx: any) => {
                      return (
                        <ReceiptItem
                          qty={item.count}
                          key={item.id}
                          price={item.price}
                        />
                      );
                    })}
                  </div>
                  <Separator className="bg-[#a1a1a1] my-12" />
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <div>Total Savings</div>
                      <div className=" flex justify-center">
                        <div className="w-12 h-12">
                          <Image
                            src="/indian-rupee-sign-solid.svg"
                            width={12}
                            height={12}
                            alt="rupee sign"
                          />
                        </div>
                        <div>{purchaseDetail.totalDiscount.toString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>Delivery Fee</div>
                      <div className="flex  justify-center space-x-4 ">
                        <div className="w-12 h-12">
                          <Image
                            src="/indian-rupee-sign-solid.svg"
                            width={12}
                            height={12}
                            alt="rupee sign"
                          />
                        </div>
                        <div>0.00</div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>Taxes and Charges</div>
                      <div className="flex  justify-center space-x-4 ">
                        <div className="w-12 h-12">
                          <Image
                            src="/indian-rupee-sign-solid.svg"
                            width={12}
                            height={12}
                            alt="rupee sign"
                          />
                        </div>
                        <div>0.00</div>
                      </div>
                    </div>
                  </div>
                  <Separator className="bg-[#a1a1a1] my-12" />
                  <div className="flex justify-between">
                    <div>To Pay</div>
                    <div className="flex  justify-center space-x-4">
                      <div className="w-12 h-12">
                        <Image
                          src="/indian-rupee-sign-solid.svg"
                          width={12}
                          height={12}
                          alt="rupee sign"
                        />
                      </div>
                      <div>{purchaseDetail.totalPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No items in the cart</div>
        )}
      </div>
    </div>
  );
};

export default BillingContent;
