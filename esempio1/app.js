
var HelloWorld = React.createClass({
    render: function() {
        return <p>Hello <strong>React</strong>!</p>;
    }
});
 
ReactDOM.render(<HelloWorld />, document.getElementById("hello"));
