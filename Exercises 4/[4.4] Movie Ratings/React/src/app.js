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

var Movie = React.createClass({
    getInitialState: function() {
        return {
			title: this.props.title || "", 
			length: this.props.length || 0, 
			rating: this.props.rating || 0, 
			description: this.props.description || ""
		};
    },
    render: function() {
		//<Rating stars="3" max="5" onRatingChange={ratingChanged} />
        return 	<div className="movie">
					<h1>{this.state.title}&nbsp;</h1>
					<Rating stars={this.state.rating} max="5"/>
					<p className="length">{this.state.length} minutes</p>
					<p className="description">{this.state.description}</p>
				</div>
    }
});

function loadMovies(){
	return [
		{
		  "title": "Spectre",
		  "length": 148,
		  "rating": 4,
		  "description": "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit toreveal the terrible truth behind SPECTRE."
		},
		{
		  "title": "Borat",
		  "length": 136,
		  "rating": 5,
		  "description": "A highly intelligent individual bangs his retarded cousin and travels to America with a goat."
		}
	];
}

function displayMovies(movies, container){
	var movieComponents = [];
	
	for(var i = 0; i < movies.length; i++){
		movieComponents.push(<Movie title={movies[i].title} length={movies[i].length} rating={movies[i].rating} description={movies[i].description} />);
	}
	
	ReactDOM.render(
		<div>{movieComponents}</div>,
		container
	);
}

// Start things..
displayMovies(loadMovies(), document.getElementById("container"));
