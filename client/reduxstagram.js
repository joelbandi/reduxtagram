// library imports
import React from 'react';
import { render } from 'react-dom';

// style imports
import css from './styles/style.styl';

// component imports
import App from './components/app.js';
import Grid from './components/grid.js';
import Photo from './components/photo.js';

// router dependency imports
import { Router,Route,IndexRoute,browserHistory } from 'react-router';

// this is how we connect these components and the infamous store that we have
import { Provider } from 'react-redux' // this lib is specially built to interface react and redux
// We will wrap the entire router in a provider tag to connect everything up



// Let also import the store here
import store,{ history } from './store.js';





// The router will inject either photo or grid as a child here as a child of the main component

// A router is also a simple component. There are three types of components , a class based component, a functional component and a static component namespaced by a single variable. React router here is a static component.

// it forms a nested structure based on what follows after "/". If nothing follows then its the index route that is rendered
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Grid}></IndexRoute>
                <Route path="/view/:postId" component={Photo}></Route>
            </Route>
        </Router>
    </Provider>
);


render(router,document.getElementById('root'));
