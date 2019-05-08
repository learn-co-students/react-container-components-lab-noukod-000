import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.PureComponent {
  state = {
    searchTerm: '',
    reviews: []
  }

  handleSubmit = event => {
        event.preventDefault();
        fetch(URL.concat('&query=',this.state.searchTerm))
        .then(res => res.json())
        .then(data => this.setState({
          reviews: data.results || []
        }));
  }

  handleChange = event => this.setState({ searchTerm: event.target.value });

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Search Movie Reviews:
          <input
              type="text"
              onChange={ this.handleChange }
              value={this.state.searchTerm}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
