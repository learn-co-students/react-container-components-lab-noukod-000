import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const MY_APP_Key = 'AE0bwgT80fUg5bLtKp4gyS3a0OCzXcME';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${MY_APP_Key}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
      super();
  
       this.state = {
        searchTerm: '', reviews: []
      }
    }

    handleChange=(event)=>{
        const value=event.target.value;
        this.setState({
            searchTerm:value
        })
    }
  
  
     submitEvent=(event)=>{
      event.preventDefault();
      fetch(URL.concat(this.state.searchTerm))
          .then(resp => resp.json())
          .then(resp => this.setState({ reviews: resp.results }));
    }
  
     render(){
      return(
        <div className="searchable-movie-reviews">
          <h3>The Searched Movie Reviews:</h3>
          <form onSubmit={this.submitEvent}>
              <input type="text" name="searchTerm" onChange={this.handleChange} />
               <input type="submit"/>
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
  
   