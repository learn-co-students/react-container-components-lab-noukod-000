import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5XVqmAza2bg5EyrvQxZc6vKF7ldLJH0t';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer  extends React.PureComponent {

    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = event => this.setState({ searchTerm: event.target.value });

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat('&query=',this.state.searchTerm))
        .then(res => res.json())
        .then(jsRes => this.setState({ reviews: jsRes.results }));
    }


    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={ this.handleSubmit }>
                    Search Movie Reviews:<br/>
                    <input
                        type="text"
                        onChange={ this.handleChange } 
                        value={this.state.searchTerm}/>
                    <button type="submit">Submit</button>
                </form>
                { this.state.reviews.length > 0 && <h2>Movie Review By Search ({this.state.searchTerm}):</h2> }
                <MovieReviews reviews={ this.state.reviews } />
            </div>
        )
    }
}
