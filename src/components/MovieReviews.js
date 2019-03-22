// Code MovieReviews Here
import React from 'react';

const MovieReviews=({ reviews })=>{
    if(reviews===[]){
        return null;
    }
    return(
        <div className="review-list">
        <ul>
            {reviews.map(function(review,index){
                return(
                    <li className="review" key={index}>
                    <h1>{review.display_title}</h1>
                    </li>
                )
            })}
        </ul>
        </div>

    )
}
export default MovieReviews;