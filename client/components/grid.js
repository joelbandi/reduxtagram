import React from 'react';
import GridItem from './grid-item.js'

// we are using old version of redux so let's not use es6 for now

const Grid = React.createClass({
  render () {
      return (
      <div className='photo-grid'>
          {this.props.posts.map((post,i) => <GridItem {...this.props} key={i} i={i} post={post}/>)}
      </div>
    );
  }
});

export default Grid;


// the spread operator '...' is used to pass the whole props object as key value attributes to the component

/*
The below two component are equivalent

 function App1() {
 return <Greeting firstName="Ben" lastName="Hector" />;
 }

 function App2() {
 const props = {firstName: 'Ben', lastName: 'Hector'};
 return <Greeting {...props} />;
 }
 */