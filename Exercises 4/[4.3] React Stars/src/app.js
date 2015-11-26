var Hello = React.createClass({
  getInitialState: function() {
    return {name: ''};
  },
  handleChange: function(event) {
    this.setState({name: event.target.value});
  },
  render: function() {
    return <div>
	  Please enter your name here: <input value={this.state.name} onChange={this.handleChange}/>
      <p>Hello {this.state.name || 'stranger'}!</p>
	</div>;
  }
});

ReactDOM.render(
  <Hello/>,
  document.getElementById("container")
);

