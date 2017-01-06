import React from 'react';
import { Link } from 'react-router';


// we are using old version of redux so let's not use es6 for now




//  to set up the react router we do this -> {React.cloneElement(this.props.children,this.props)} 
// This is what will be populated by the react router to switch out the panes (photo or grid) 
const Main = React.createClass({
  render () {
    return (
      <div>
        <h1><Link to="/">Reduxtagram</Link></h1>
          {React.cloneElement(this.props.children,this.props)} 
      </div>
    );
  }
});

export default Main;