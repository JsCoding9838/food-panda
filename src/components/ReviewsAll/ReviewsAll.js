import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewsAll = ({food}) => {
    const {name, img, comment, ratings}=food;
    return (
        <div>
            <div className="lg:px-2 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            
            
            <div className="text-center space-y-2 sm:text-left">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={img} alt="Woman's Face"/>
                <div className="space-y-0.5 w-full">
                    <p className="text-lg text-black font-semibold">
                        sfsdfsafdsfsdfds{name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        sdsdfdfs sfsfafssdfsf sfsfa sfsfa sfsfa fffdafdfs {comment}
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
        </div>
    );
};

export default ReviewsAll;