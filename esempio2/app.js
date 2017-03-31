
var LoggedUser = React.createClass({         
    render: function() {
         
        return <p>
               Benvenuto <strong>{this.props.user.fullName().toUpperCase()}</strong>,
               sei collegato come <em>{this.props.user.userName}</em>.
               </p>
        }
});
 
var userInfo = {
    userName  : 'admin',
    firstName : 'Mark',
    lastName  : 'Zuckerberg',
     
    fullName  : function() {
        return this.firstName + ' ' + this.lastName;
    }
};
 
ReactDOM.render(<LoggedUser user={userInfo}/>, document.getElementById("login"));
