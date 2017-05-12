/*
 *
 * UserContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectUserContainer from './selectors';
import {Link} from 'react-router';

export class UserContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    console.log(this.props.params)
  }
  render() {
    let {params} = this.props;
    return (
      <div className="">
        <nav className="pv4 ">
          <Link to={"/"+params.user+"/screenshots"} className="link pa2 ph3 br-pill mh3" activeClassName="bg-blue white ">Screenshots</Link>
          <Link to={"/"+params.user+"/timelog"} className="link pa2 ph3 br-pill mh3" activeClassName="bg-blue white ">Time log</Link>
          <Link to={"/"+params.user+"/archive"} className="link pa2 ph3 br-pill mh3" activeClassName="bg-blue white ">Archive</Link>
        </nav>
      {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapStateToProps = selectUserContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
