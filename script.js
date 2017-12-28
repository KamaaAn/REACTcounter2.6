var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Click to +1' ),
            React.createElement('button', {onClick: this.decrement}, 'Click to -1' ),
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));