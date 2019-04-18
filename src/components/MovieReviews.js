// Code MovieReviews Here
import React from 'react'

const Review = ({title, summary}) => {
  return (
    <div key={title} className="review">
      <hr></hr>
      <h2>{title}</h2>
      <h5><i>{summary}</i></h5>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className="review-list">{reviews.map(Review)}</div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews