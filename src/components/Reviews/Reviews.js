import React from 'react';
import useFoods from '../hooks/useFoods';
import ReviewsAll from '../ReviewsAll/ReviewsAll';

const Reviews = () => {

    const [foods] = useFoods();

    return (
        <div className="grid gap-y-3 md:gap-x-2 lg:gap-x-6 py-4 lg:px-12 md:grid-cols-2 lg:grid-cols-3">

            
           {
               foods.map(food => <ReviewsAll food={food} key={food.id}/>)
           }

        </div>
    );
};

export default Reviews;