import React from 'react';
import useFoods from '../hooks/useFoods';

const Reviews = () => {

    const [foods] = useFoods();

    return (
        <div>
            
            <h1>Foods: {foods.length}</h1>

        </div>
    );
};

export default Reviews;