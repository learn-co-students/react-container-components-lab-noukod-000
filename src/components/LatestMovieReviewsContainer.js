import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2a859a19-f5bd-4d1a-bf6c-894f93d92729';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const temp1 = data.results

        this.setState({
          reviews: temp1
        })
      })
 }

  render() {
  return <div className="latest-movie-reviews">
    <MovieReviews reviews={this.state.reviews} />
  </div>;
}

}


export default LatestMovieReviewsContainer
