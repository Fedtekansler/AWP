var Rating = React.createClass({
	getInitialState: function() {
		return {stars: 0};
	},
	handleChange: function(event) {
		//this.setState({name: event.target.value});
	},
	render: function() {
		var starElements = [];
		var currentRating = this.state.stars || this.props.stars
		for (var i = 1; i <= this.props.max; i++) {
			if(i <= currentRating){
				starElements.push(<span>&#9733;</span>);
			}
			else{
				starElements.push(<span>&#9734;</span>);
			}
		}
		return <div>{starElements}</div>;
		/*return <div>
			Please enter your name here: <input value={this.state.name} onChange={this.handleChange}/>
			<p>Hello {this.state.name || 'stranger'}!</p>
		</div>;*/
	}
});

ReactDOM.render(
  <Rating stars="3" max="5" />,
  document.getElementById("container")
);

