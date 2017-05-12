/**
*
* NavProfileDropdown
*
*/

import React from 'react';
import onClickOutside from 'react-onclickoutside';
import styles from './styles.css';
import classNames from 'classnames';

class NavProfileDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {profileDropdown: false}

  handleClickOutside(evt){
    this.setState({profileDropdown:false})
  }

  render(){
    let {name, image} = this.props;
    return(
      <div className="dib fr ">
        <a className=" db pointer pv2 ph3 hover-bg-near-white" onClick={()=>this.setState({profileDropdown:!this.state.profileDropdown})}>
          <span className="pr1 ">{name}</span>
          <img src={image} className="br-100"  style={{width:"50px",height:"50px"}}/>
          <span className="pl1"><img src={require("containers/App/statics/caret-down.svg")} style={{width:"10px", height:"10px"}}/></span>
        </a>
        <ul className={classNames("absolute list pa0 ma0 bg-white shadow-4", {dn:!this.state.profileDropdown, dib:this.state.profileDropdown})} style={{width:"150px"}}>
          <li className="bg-near-white hover-black" >
            <a onClick={this.props.logout} className="w-100 pv2 ph3 db">Logout</a>
          </li>
        </ul>
      </div>
    )
  }

}

export default onClickOutside(NavProfileDropdown);
