import React, { useContext } from "react";
import { useProductDispatch, useProductState } from "../../pages/_app";

const CategorySection = () => {
  const allCategories: any = { "All Products": 0 };
  const { products, selectedCategory } = useProductState();
  const dispatch = useProductDispatch();
  products.forEach((item: any) => {
    if (!allCategories[item.category]) {
      allCategories[item.category] = 0;
    }
  });

  return (
    <div className="md:col-span-2 md:col-start-2 sticky top-64 py-12 bg-[#fff] z-20 md:border-b-none md:shadow-none shadow-6 border-b-3 border-[#1d7cbf] col-span-full md:border-r-2 md:border-[#f1f1f1] h-full md:pr-10 md:py-20 md:px-0 px-16">
      <div className="hidden md:block text-24 pt-5 md:pb-10 text-[#1d7cbf]">
        Categories
      </div>
      <div className="flex md:flex-col flex-row md:space-y-8 md:space-x-0 space-x-4">
        {Object.keys(allCategories).map((category: any) => {
          return (
            <div
              key={category}
              onClick={() => {
                dispatch({
                  type: "change-category",
                  selectedCategory: category,
                });
              }}
              className={`py-2 px-10 rounded-8 cursor-pointer  ${
                category === selectedCategory
                  ? "bg-[#1d7cbf] text-[#fff]"
                  : "hover:bg-[#F1F1F1]"
              }`}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
