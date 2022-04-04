import React from 'react';
import useFoods from '../hooks/useFoods';
import Review from '../Review/Review';

const Reviews = () => {

    const [foods] = useFoods();

    return (
        <div className="grid grid-cols-2 gap-10">
            
           {
               foods.map(food => <Review food={food} key={food.id}></Review>)
           }

        </div>
    );
};

export default Reviews;