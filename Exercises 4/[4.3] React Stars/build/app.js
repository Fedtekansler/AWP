(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Hello = React.createClass({
  displayName: 'Hello',

  getInitialState: function () {
    return { name: '' };
  },
  handleChange: function (event) {
    this.setState({ name: event.target.value });
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      'Please enter your name here: ',
      React.createElement('input', { value: this.state.name, onChange: this.handleChange }),
      React.createElement(
        'p',
        null,
        'Hello ',
        this.state.name || 'stranger',
        '!'
      )
    );
  }
});

ReactDOM.render(React.createElement(Hello, null), document.getElementById("container"));

},{}]},{},[1]);
