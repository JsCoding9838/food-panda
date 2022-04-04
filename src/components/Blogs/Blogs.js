import React from 'react';

const Blogs = () => {
    return (
        <div className="bg-fuchsia-500 lg:py-3 lg:px-32">
            <div className="lg:mb-8">
                <h2 className="text-center text-2xl lg:text-4xl underline">About Something</h2>
            </div>
            <div className="lg:flex justify-between gap-5 text-center">
                <div className="bg-red-500 w-3/5 lg:p-5">
                    <h3 className="font-bold">What is Context API?</h3>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti necessitatibus excepturi optio voluptas amet eos maxime suscipit inventore, corporis recusandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti necessitatibus excepturi optio voluptas amet eos maxime suscipit inventore,</p>
                </div>
                <div className="bg-red-500 w-3/5 lg:p-5">
                    <h3 className="font-bold">What is Semantick tage?</h3>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti necessitatibus excepturi optio voluptas amet eos maxime suscipit inventore, corporis recusandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti necessitatibus excepturi optio voluptas amet eos maxime suscipit inventore,</p>
                </div>
                <div className="bg-red-500 w-3/5 lg:p-5">
                    <h3 className="font-bold">Inline block vs Inline block elements?</h3>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti necessitatibus excepturi optio voluptas amet eos maxime suscipit inventore, corporis recusandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti necessitatibus excepturi optio voluptas amet eos maxime suscipit inventore,</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;