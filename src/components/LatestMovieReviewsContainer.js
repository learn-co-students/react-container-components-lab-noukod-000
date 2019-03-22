import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'svi2vQPPLBu5HDcujE1ni0CrBzPHQwAv';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;
            
class LatestMovieReviewsContainer extends Component{
    state={
        reviews:[]
    }

    componentDidMount(){
        fetch(URL)
        .then((res)=>res.json())
        .then(({ results })=>{
            this.setState({
                reviews: results
            })
        })
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;