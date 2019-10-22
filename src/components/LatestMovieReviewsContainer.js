// import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import MovieReviews from './MovieReviews'



// // Code LatestMovieReviewsContainer Here

// export default class LatestMovieReviewsContainer extends Component {
//     constructor(){
//         super()
//         this.state = {
//             reviews: []
//         }
//     }

//     componentDidMount(){
//         const NYT_API_KEY = '2YTPGpGpw9XCwtQyckyouj9Wp30WG4sE';
//         const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;
//         fetch(URL)
//             .then(response => response.json())
//             .then(data => this.setState({reviews: data.results}))
//     }

//     render() {

//         return (
//             <div className="latest-movie-review">
//                 <h2> The latest movie review </h2>
//                 <MovieReviews reviews={this.state.reviews} />
//             </div>
//         )
//     }
// }

