import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const MY_APP_Key = 'AE0bwgT80fUg5bLtKp4gyS3a0OCzXcME';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${MY_APP_Key}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor(){
      super();
  
       this.state = {
        reviews: []
      }
    }
  
     componentWillMount(){
      fetch(URL)
        .then(resp =>  resp.json)
        .then(resp => this.setState({ reviews: resp.results }))
    }
  
     render(){
      return(
        <div className="latest-movie-reviews">
          <h3>The Latest Reviews:</h3>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }

