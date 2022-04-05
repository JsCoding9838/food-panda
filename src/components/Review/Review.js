import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({food}) => {
    const {name, img, comment, ratings}=food;
    return (
       
        <div className="lg:px-2 mx-3 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center md:flex md:flex-cols-2 sm:space-y-0 ">
            
            
            <div className="p-4 mb-3 space-y-2 sm:text-left">
            <div>
            <img className="block mx-auto h-40 rounded-full sm:mx-0 sm:shrink-0" src={img} alt="Woman's Face"/>
            </div>
                <div className="space-y-0.5 w-full">
                    <p className="text-lg text-black font-semibold">
                        {name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {comment}
                    </p>
                    <p className="text-slate-500">Rating: <span className="text-yellow-500 text-sm">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        </span> {ratings}</p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message
                </button>
            </div>
            
        </div> 
      
    )
};

export default Review;