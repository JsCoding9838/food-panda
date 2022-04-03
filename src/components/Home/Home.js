import React from 'react';
import logo from '../../Assets/Images/home-img-2.png';


const Home = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row h-screen justify-around items-center mb-8">

                <div className='px-3 py-3 md:px-16 lg:w-3/5 order-2 md:order-last'>
                    <span className="text-2xl font-bold  md:text-4xl lg:text-7xl">Your best Phone</span>
                    <p className="my-5 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum eius, cum laudantium excepturi alias ipsam aliquid provident blanditiis iste ducimus, nulla dolore. Sequi facere enim commodi quae sit omnis.aliquid provident blanditiis iste ducimus, nulla dolore. Sequi facere enim commodi quae sit omnis.</p>
                    <button className="rounded-full bg-green-700 px-4 py-2 font-bold uppercase text-white">Live Demo</button>
                </div>

                <div className="w-full lg:w-2/5 order-1 md:order-last">
                    <img src={logo} alt="home images" />
                </div>

            </div>

            <div className="bg-slate-300 lg:h-96 lg:py-3">
                <h2 className="text-center text-4xl ">Customar Reviews(3)</h2>
            </div>

        </div>
    );
};

export default Home;