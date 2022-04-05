import React from 'react';

const Blogs = () => {
    return (
        <div className="lg:py-3 lg:px-32">
            <div className="lg:mb-8">
                <h2 className="text-center text-2xl lg:text-4xl underline decoration-6 underline-offset-8">About Something</h2>
            </div>
            <div className="grid lg:grid-cols-3 lg:justify-items-center gap-y-5 mt-3 text-center p-2">
                <div className="lg:w-3/5 lg:p-5">
                    <h3 className="font-bold mb-3">What is Context API?</h3>

                    <p className='leading-8 font-semibold text-slate-500'>Context API a Separate storage is created outside the Component tree which we have to store the data. and inside functional Component or Hooks , we have to use useContext() Hooks provided by React package.</p>
                </div>
                <div className="lg:w-3/5 lg:p-5">
                    <h3 className="font-bold mb-3">What is Semantic tage?</h3>

                    <p className='leading-8 font-semibold text-slate-500'>Semantic HTML tags allows you to add meaning to your markup so that search engine , screen and web browser can make make sense of it . On the other hand non-senmatic are generic content.<br/></p>
                </div>
                <div className="lg:w-3/5 lg:p-5">
                    <h3 className="font-bold mb-3">Block vs Inline block elements?</h3>

                    <p className='leading-8 font-semibold text-slate-500'>Block line element start a new line and always take full width available space to the rigth side as far as it can. on the other hand inline element doesn't start on a new line.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;