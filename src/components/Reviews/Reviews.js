import React from 'react';
import useFoods from '../hooks/useFoods';
import ReviewsAll from '../ReviewsAll/ReviewsAll';

const Reviews = () => {

    const [foods] = useFoods();

    return (
        <div className="grid gap-y-3 lg:gap-x-6 py-4 lg:px-12 lg:grid-cols-3 bg-slate-600">

            
           {
               foods.map(food => <ReviewsAll food={food} key={food.id}/>)
           }

        </div>
    );
};

export default Reviews;