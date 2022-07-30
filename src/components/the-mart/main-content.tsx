import React from "react";
import CategorySection from "./category-section";
import Products from "./products";

const MainContent = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 min-h-screen">
      <CategorySection />

      <Products />
    </div>
  );
};

export default MainContent;
