import React from "react";
import MealCard from "./MealCard";

const PopularMeals = () => {
  const meals = [
    {
      title: "Cheese Burger",
      icon: "🏆 Bestseller",
      description: "Whole herb-marinated chicken grilled to golden perfection",
      price: "4500",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      title: "Pepperoni Pizza",
      icon: "🔥 Spicy",
      description: "Fiery buffalo wings with our signature hot sauce",
      price: "7000",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      title: "Fried Chicken",
      icon: "🏆 Bestseller",
      description: "Whole grilled chicken, 2 large sides, 4 drinks & dessert",
      price: "5500",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    },
    {
      title: "Chicken Burger",
      icon: "🏆 Bestseller",
      description:
        "Crispy fried chicken patty, melted cheese, special sauce on brioche bun",
      price: "2,800",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    },
  ];

  return (
    <section className="flex flex-col px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 items-center mt-6 sm:mt-10">
      <p className="text-[16px] text-[#CC0000] font-medium">OUR BESTSELLERS</p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        What Everyone's Ordering
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 w-full max-w-7xl">
        {meals.map((meal, index) => (
          <MealCard
            key={index}
            icon={meal.icon}
            title={meal.title}
            description={meal.description}
            price={meal.price}
            image={meal.image}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularMeals;
