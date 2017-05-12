/**
*
* Navigation
*
*/

import React from 'react';
import {Link} from 'react-router';


function Navigation(props) {
  let {toggleSidebar,users} = props;

  let userRepeat = users.map((id,i)=>{
    return (
      <li className="ph4 pa0 white-70 hover-white mb1" key={i}>
        <Link to={`/${id}/screenshots`} className="link db cf " style={{color: "inherit",}}>
          <span className="dib pv2">{id}</span>
          <span className="dib fr bg-flat-primary-dark pa2">
            <img src={require("containers/App/statics/user-outline.svg")} className="h1"/>
          </span>
        </Link>
      </li>
    )
  })

  return (
    <nav className="h-100 bg-dark-blue sidenav" style={{minWidth:"250px",}}>
    <div className=" pl4 db bg-navy" style={{paddingTop:"1.5rem", paddingBottom:"1.5rem"}}>
      <a className="white-90 " onClick={toggleSidebar}>
        monitor
      </a>
    </div>
    <div className="ph3 bg-navy silver">
      <input type="search" className="ba  pa2"/><button type="search">Search</button>
    </div>
        <ul className="list pl0 mt2" style={{overflow:"scroll", height:"90%"}}>
            {userRepeat}
          </ul>
    </nav>
  );
}

export default Navigation;
