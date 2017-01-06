// Now we are going to finally bind our main component view that is in the main.js with both the action creators (so UI elements can trigger actions upon interaction ) and the store (so the the components can populate itself with stuff).. Were going to use connect to pass these data to our component as props so whenever the data updates...the components always updates.




// we do a few imports to help us with these binding tasks


/*
 /!\ -<important>- We have already bound the store here to the componenets using provider but,
 According to stack overflow link here
 http://stackoverflow.com/questions/35864957/how-to-use-reduxs-provider-with-react

 The best way to access your store through a component is using the connect() function, as described in the documentation. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates. Additionally, by default it will pass in dispatch as this.props.dispatch. Note that connect actually creates a new component that wraps around your existing one! This pattern is called Higher-Order Components, and is generally the preferred way of extending a component's functionality in React (over stuff like inheritance or mixins).

 Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux devs almost always recommend using connect over accessing the store directly - however, if you have a very good reason to need lower level access, the Provider component makes it so all its children can access the store through this.context:

 for example see the original StackOverflow link

  */





import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator.js';
import Main from './main.js';


//lets now create a function to map our state to the components props
function mapStateToProps(state){
    return {
        posts:state.posts,
        comments:state.comments
    }
}

//lets now create a function to map the dispatch function of the store to the components as a prop
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}


// Now lets connect everything up with our Main which we have imported and call the final component as App
const App = connect(mapStateToProps,mapDispatchToProps)(Main);

// This will add all that we require into props...which is perfect while building out the components
/*
props of the App component will now be the folowing object whose keys are ...

available actions to call
 -> addComment
 -> increment
 -> removeComment
 available store objects used to populate things
 -> comments
 -> posts
 other things added App receives a prop  from Main itself
 -> history
 -> location
 -> children
 -> params
-> route
-> routeParams
-> routes
*/



export default App;