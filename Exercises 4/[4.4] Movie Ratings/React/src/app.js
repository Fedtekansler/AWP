/* Rating component (unchanged from previous exercise) */
var Rating = React.createClass({
    getInitialState: function() {
        if(this.props.onRatingChange){
            this.props.onRatingChange(this.props.stars); // Trigger initial ratingChange event
        }
        return {stars: this.props.stars || 0};
    },
    handleClick: function(rating, event) {
        this.setState({stars: rating});
        if(this.props.onRatingChange){
            this.props.onRatingChange(rating);
        }
    },
    render: function() {
        var starElements = [];
        var emptyStar = "☆";
        var fullStar = "★";
        for (var i = 1; i <= this.props.max; ++i) {
            starElements.push(<span onClick={this.handleClick.bind(this, i)}>{i <= this.state.stars ? fullStar : emptyStar}</span>);
        }
        return <div className="rating">{starElements}</div>;
    }
});

/* Movie component */
var Movie = React.createClass({
    getInitialState: function() {
        return {
			movie: this.props.movie || {}
		};
    },
	updateRating: function(rating){
		this.props.movie.rating = rating;
		console.log("Rating changed: ", movies);
	},
    render: function() {
        return 	<div className="movie">
					<h1>{this.state.movie.title}&nbsp;</h1>
					<Rating stars={this.state.movie.rating} max="5" onRatingChange={this.updateRating}/>
					<p className="length">{this.state.movie.length} minutes</p>
					<p className="description">{this.state.movie.description}</p>
				</div>
    }
});

function displayMovies(movies, container){
	var movieComponents = [];
	
	for(var i = 0; i < movies.length; i++){
		movieComponents.push(<Movie movie={movies[i]} />);
	}
	
	ReactDOM.render(
		<div>{movieComponents}</div>,
		container
	);
}

// Start things..
movies = require('./movies.json');
displayMovies(movies, document.getElementById("container"));

