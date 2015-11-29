var movieData = require('./movies.json');

console.log(movieData.movies[0].title);

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

/* External event handler for when rating changes. */
function ratingChanged(rating){
    console.log("Rating changed to "+rating);
    document.getElementById("current-rating").innerHTML = rating;
}

ReactDOM.render(
<Rating stars="3" max="5" onRatingChange={ratingChanged} />,
    document.getElementById("container")
);

