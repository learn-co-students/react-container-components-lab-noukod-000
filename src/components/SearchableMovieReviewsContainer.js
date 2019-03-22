import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'svi2vQPPLBu5HDcujE1ni0CrBzPHQwAv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
            
class SearchMovieReviewsContainer extends Component{
    state={
        reviews:[],
        searchTerm:""
    }

    searchMovieReviews=()=>{
        fetch(URL+`&query=${this.state.query}`)
        .then((res)=>res.json())
        .then(({ results })=>{
            this.setState({
                reviews: results
            })
        })
    }

    onHandleChange=(event)=>{
        const searchTerm=event.target.value;
        this.setState({ searchTerm });
    }

    onHandleSubmit=(event)=>{
        event.preventDefault();
        this.searchMovieReviews()
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.onHandleSubmit}>
                <input type="text" onChange={this.onHandleChange} />
                <button>Submit</button>
            </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchMovieReviewsContainer;