/*
 *
 * AuthWrapper
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuthWrapper from './selectors';
//import { FormattedMessage } from 'react-intl';
import Sidebar from 'react-sidebar';
import messages from './messages';
import Navigation from 'components/Navigation';
import NavProfileDropdown from 'components/NavProfileDropdown';

import {getUsers} from './actions';

export class AuthWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {sidebarOpen: false}

  componentWillMount(){

    //console.log(this.props.isAuthenticated);

    if (!this.props.isAuthenticated){
      //this.props.dispatch(push("/login"))
    }

    this.props.dispatch(getUsers())

  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  toggleSidebar(){
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  logout(){
    this.props.dispatch(requestLogout())
    localStorage.removeItem('id_token')
    this.props.dispatch(receiveLogout())
    this.props.dispatch(push('/login'))
    console.log("logout")
  }

  render() {
    let {users} = this.props;
    let nav = <Navigation toggleSidebar={::this.toggleSidebar} users={users}/>
    //let {fetchcounter, user} = this.props;
    let user = {}



    return (
      <Sidebar sidebar={nav}
               open={this.state.sidebarOpen}
               onSetOpen={::this.onSetSidebarOpen}
               className="bg-gray" >
         <div >

         <nav className="w-100 bg-white cf  dt shadow-4 fixed">
         <a className="dtc v-mid pl4 w1 pointer pv2 bg-blue" onClick={::this.toggleSidebar}>
           <img src={require("containers/App/statics/dashboard.svg")} className="dib  " style={{height:"20px"}}/>
         </a>


          <a className="dtc v-mid pl4 pointer pv2" onClick={::this.toggleSidebar}>monitor</a>


           <NavProfileDropdown logout={::this.logout} name={user.FirstName+" "+user.LastName} image={user.image}/>

         </nav>
            <section className="pt5">
              {/*Begin main content*/}
              <div className=" mt3">
                {React.Children.toArray(this.props.children)}
              </div>
              {/*End Main Content*/}
              {/*Side nav*/}
              {/*End SideNav (adds)*/}
            </section>
         </div>
      </Sidebar>
    );
  }
}

const mapStateToProps = selectAuthWrapper();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthWrapper);
