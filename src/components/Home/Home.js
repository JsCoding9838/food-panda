import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/home-img-2.png";
import useFoods from "../hooks/useFoods";
import Review from "../Review/Review";

const Home = () => {
  const [foods] = useFoods();
  const threeFood = foods.slice(0, 3);
  return (
    <div className="pt-4">
      <div className="flex flex-col md:flex-row h-screen justify-around items-center mb-8">
        <div className="px-3 py-3 md:px-16 lg:w-3/5 order-2 md:order-last">
          <span className="text-2xl font-bold  md:text-4xl lg:text-7xl text-green-800">
            Your best Food<span className="text-2xl font-bold  md:text-4xl lg:text-7xl text-red-600">'</span>s
          </span>
          <p className="my-5 md:text-lg">
          Find recipes for fried chicken, chicken breast, grilled chicken, chicken wings, and more! Allrecipes has more than 5,430 kitchen-approved chicken recipes.
          </p>
          <button className="rounded-full bg-green-700 hover:bg-green-900 px-10 py-3 font-bold uppercase text-white lg:text-4xl">
            Live Demo
          </button>
        </div>

        <div className="w-full lg:w-2/5 order-1 md:order-last">
          <img src={logo} alt="home images" />
        </div>
      </div>

      <div className="bg-slate-300 lg:py-3">
          <h1 className="lg:ml-16 ml-4 text-2xl mt-14 lg:text-3xl font-semibold text-green-600">Reviews</h1>

          <div className="lg:grid gap-y-3 py-4 lg:grid-cols-3 bg-slate-600">
            {threeFood.map((food) => (
              <Review food={food} key={food.id}></Review>
            ))}
          </div>

          <div className="flex justify-center ">
          <button className="rounded-full bg-green-700 hover:bg-green-900 my-5 px-16 py-2 font-bold uppercase text-white lg:text-4xl">
            <Link className="text-2xl font-semibold" to="/reviews-details">See All Reviews</Link>
          </button>
          </div>

      </div>
    </div>
  );
};

export default Home;
