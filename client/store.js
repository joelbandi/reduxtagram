import { createStore,compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
// Root reducer is a js object containing all reducers
import rootReducer from './reducers/rootReducer.js';

// import dummy data here to populate our stuff posts and comments lol
import comments from './data/comments.js';
import posts from './data/posts.js';


// create an data store object for the default data
const rawStoreObject = {
    posts,
    comments,

}

// create a big redux store for our object


// The last argument is to enable the redux dev tools as a chrome extension
const enhancers = compose (
    window.devToolsExtension ? window.devToolsExtension() : fun => fun
);



const store = createStore(rootReducer, rawStoreObject, enhancers);


// sync up our browser history with the redux store also

export const history = syncHistoryWithStore(browserHistory, store);


// To enable hot reloading of rootReducers file..as only jsx gets hot reloaded but not js
// here if were checking if hot reload is available and upon changes in any file of reducer folder we are
// re-importing the rootReducer file by passing a require statement as a callback to the accept event

if(module.hot){
    module.hot.accept('./reducers/rootReducer.js',() => {
        // we cant use es6 syntax inside functions..only commonjs syntax
        //get the default export of that file
        const nextRootReducer = require('./reducers/rootReducer.js').default;
        store.replaceReducer(nextRootReducer);
    });
}



// export some stuff from here
export default store;