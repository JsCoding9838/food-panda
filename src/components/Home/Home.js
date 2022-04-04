import React from "react";
import logo from "../../Assets/Images/home-img-2.png";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row h-screen justify-around items-center mb-8">
        <div className="px-3 py-3 md:px-16 lg:w-3/5 order-2 md:order-last">
          <span className="text-2xl font-bold  md:text-4xl lg:text-7xl text-green-800">
            Your best Foods
          </span>
          <p className="my-5 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            rerum eius, cum laudantium excepturi alias ipsam aliquid provident
            blanditiis iste ducimus, nulla dolore. Sequi facere enim commodi
            quae sit omnis.aliquid provident blanditiis iste ducimus, nulla
            dolore. Sequi facere enim commodi quae sit omnis.
          </p>
          <button className="rounded-full bg-green-700 hover:bg-green-900 px-10 py-3 font-bold uppercase text-white lg:text-4xl">
            Live Demo
          </button>
        </div>

        <div className="w-full lg:w-2/5 order-1 md:order-last">
          <img src={logo} alt="home images" />
        </div>
      </div>

      <div className="bg-slate-300 lg:h-96 lg:py-3">
          
      </div>
    </div>
  );
};

export default Home;
