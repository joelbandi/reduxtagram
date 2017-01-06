// This is a subreducer for the commentReducer in the main reducer file.
// function

/*
 This is known as a reducer componsition.


 Every Reducer is passed a slice of the state its is responsible for.
 For a reducer like our commentsReducer in the rootreducer page..we find
 that it does multiple things based on what action is provided.


 commentReducer gets passed a slice of the state
 That means the whole comments object from the state.
 We need only update one entry in the object whose key is the postId and the value is an array of comments


 So we create a sub reducer called individualComment that gets handed just that array of to which it has to add an extra comment
 This way we keep passing smaller and smaller slices of states to purer and purer smaller reducer functions

 */

// This handles adding indivual comments


function individualComment(state=[], action) {
    switch(action.type){
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user:action.author,
                    text:action.comment
                }
            ];
        case 'REMOVE_COMMENT':
            // returning new array after deleting the commentIndexth comment
            return [
                ...state.slice(0,action.commentIndex),
                ...state.slice(action.commentIndex+1)
            ]
        default:
            return state;
    }
}


// the shape of the comments object is
// comments{
//     postIndex:[
//         {
//             comment:'some comment',
//             author:'some author'
//         }
//     ]
// }



// This is wraps the individualComments to export and use with the main commentReducer in rootReducer
function commentsReducerUtil(state={}, action) {
    if(typeof action.postIndex !== 'undefined'){
        return {
            ...state,
            //overwrite this post with a new updated array
            [action.postIndex]:individualComment(state[action.postIndex],action)//the action still contains the author and comment information
        }
    }else{
        return state;
    }
}

export default commentsReducerUtil;


// This individual comment reducer can also be written in the same file as rootReducer.
