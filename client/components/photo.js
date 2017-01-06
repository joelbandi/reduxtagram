import React from 'react';
import GridItem from './grid-item.js';
import Comments from './comments.js';
// we are using old version of redux so let's not use es6 for now

const Photo = React.createClass({
  render () {

      //index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)

      // get us the post
    const post = this.props.posts[i];

    const postComments = this.props.comments[this.props.params.postId] || [];

    return (
      <div className='single-photo'>
        <GridItem i={i} post={post} {...this.props}/>
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
});

export default Photo;