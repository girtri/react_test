
var LoggedUser = React.createClass({         
    render: function() {
         
        return <p>
               Benvenuto <strong>{this.props.user.fullName().toUpperCase()}</strong>,
               sei collegato come <em>{this.props.user.userName}</em>.
               <p>autore: {this.props.author}</p>
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

var myProperty = 'Gerry';
 
ReactDOM.render(<LoggedUser user={userInfo} author={myProperty} />, document.getElementById("login"));
