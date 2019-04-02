import React from 'react';

const MovieReviews = (props) =>
    <div className='review-list'>
        {props.reviews.map((review, index) => {
            return (
                <div key={index} className='review'>
                    <a href={review.link.url}> {review.headline} </a><br/>
                    <span >{review.byline}</span>
                    <blockquote>{review.summary_short}</blockquote>
                </div>
            )
        })}
    </div>

MovieReviews.propsDefault = {
    reviews: []
}

export default MovieReviews