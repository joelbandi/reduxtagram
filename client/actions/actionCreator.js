// Action creator is a js object that contains a bunch of functions that returns actions

// people generally organize action creators and group action types in different files but we will do it in one file

/*
we need quite a few action creators here
1 -> increment a like
2 -> add a comment
3 -> remove a comment
4 -> recording the browser history into the store (we don't need to create this one explicitly as we can use the inbuilt react-router-redux api to get it done)
 */

export function increment (postIndex) {
    return {
        type:'INCREMENT_LIKES',
        postIndex
    }
}


// here the postIndex is the hash value of the thing
export function addComment (postIndex,author,comment) {
    return {
        type:'ADD_COMMENT',
        postIndex,
        author,
        comment
    };
}


// here the postIndex is the hash value of the thing
export function removeComment (postIndex,commentIndex) {
    return {
        type:'REMOVE_COMMENT',
        postIndex,
        commentIndex
    };
}