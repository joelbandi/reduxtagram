// A reducers takes in current state and action and returns a new copy (updated) of the store
// our store has two data points..comments and posts so we have to create two reducers one for each
// usually we create these two reducers in two different files but for sake of simplicity we can combine it into one single instead of exporting them separately



// now we know that all reducers are going to run for every action that is dispatched...we have to make sure to update the logic in the reducers to act only when appropriate
// lets now update the logic here
function postReducer (state = [],action) {

    const { postIndex } = action;

    switch (action.type){
        case 'INCREMENT_LIKES':
            return [...state.slice(0,postIndex),{...state[postIndex],likes:state[postIndex].likes+1},...state.slice(postIndex+1)];
        default:
            return state;
    }
}

import commentsReducerUtil from './comments.js'

function commentReducer (state = {},action){

    const { postIndex,comment,author,commentIndex } = action;


    // subreducer written in comments.js
    return commentsReducerUtil(state,action);


}



// all store can only be created with one reducer...which we have come to call as rootReducer.
// So now we are going to combine all reducers into one rootReducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    routing:routerReducer,
    comments:commentReducer, // pass in the store data key and its corresponding reducer
    posts:postReducer // same here ..have to maintain similar shape of keys with respect to store
})

/*
 When an action is dispatched all reducers are activated and each reducer gets passed only the part of the state it cares about..
 Thanks to combine reducer.

        &&

 the Key of routing is  in rootReducer if you wish to include map history to state
 */

export default rootReducer;

