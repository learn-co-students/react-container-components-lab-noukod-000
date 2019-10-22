// // Code MovieReviews Here

// import React from 'react';

// // NYT review
// // -byline, headline, pulication_date

// const Review = ({byline, headline, publication_date}) => {
//     return(
//         <div>
//             <h3>{headline}</h3>
//              <p>{headline}</p> - <h5>{publication_date}</h5>
//         </div>
//     )
// }

// const MovieReviews = ({reviews}) => <div>{reviews.map(Review)}</div>

// // <div className="review-list">{reviews.map( review => <h2>{review.headline}</h2> )}</div>
// MovieReviews.defaultProps = {
//     // reviews is a prop of MovieReview
//     // We can assign it a value within any component like <MovieReview reviews={anObject} />
//     reviews: []
// }


// export default MovieReviews;
