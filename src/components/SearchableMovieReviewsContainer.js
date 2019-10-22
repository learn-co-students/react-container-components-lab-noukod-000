import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2YTPGpGpw9XCwtQyckyouj9Wp30WG4sE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleSearchChange = (event) =>{
        event.preventDefault();
        this.setState({
            searchTerm: event.target.value
        })
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(data => this.setState({
                reviews: data.results
            }))
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleSearchChange} /> <br/>
                    {/* {this.state.searchTerm} */}
                    <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }
}

