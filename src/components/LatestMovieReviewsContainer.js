import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5XVqmAza2bg5EyrvQxZc6vKF7ldLJH0t';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.PureComponent {

    state = {
        reviews: []
    };

    componentDidMount() {
        fetch(URL)
          .then(res => res.json())
          .then(jsResponse => this.setState({ reviews: jsResponse.results}));
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
