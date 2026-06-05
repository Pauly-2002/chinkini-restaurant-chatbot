import React from "react";

const Categories = () => {
  const categories = ["Pizza", "Burger", "Chicken", "Drinks", "Rice"];

  return (
    <section className="px-10 py-10">
      <h2 className="text-3xl font-bold mb-8">Categories</h2>

      <div className="flex flex-wrap gap-5">
        {categories.map((item, index) => (
          <button
            key={index}
            className="px-6 py-3 bg-white shadow rounded-xl hover:bg-orange-500 hover:text-white transition"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
