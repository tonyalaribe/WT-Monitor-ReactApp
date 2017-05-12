/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLoginPage from './selectors';
//import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  submitForm(e){
    e.preventDefault();

    let data = {}
    data.username = this.refs.username.value
    data.password = this.refs.password.value

    //this.props.dispatch(requestLogin(data))
    console.log(data)
  }
  render() {
    let {isLoginFailure} = this.props;
    let loginFailure

    if (isLoginFailure){
      loginFailure = <p className="black">Invalid Username or password</p>
    }

    return (
      <div className="dt w-100 tc" style={{height:"100vh"}}>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />

          <section className="dtc v-mid">
            <div className="tc dib">
              <h2>monitor</h2>
              <p>Login to Continue</p>

              {loginFailure}

              <form className="tl dib pv2 " style={{minWidth:"300px"}}>
                <div className="pv2">
                  <label className="db pa1">Username</label>
                  <input type="text" className="input-reset w-100 pa2 ba b--black-20" ref="username"/>
                </div>
                <div className="pv2">
                  <label className="db pa1">Password</label>
                  <input type="password" className="input-reset w-100 pa2 ba b--black-20" ref="password"/>
                </div>
                <div className="tr mt3">
                  <button className="pa3 bg-navy dim white-80 pointer" onClick={::this.submitForm}>Submit</button>
                </div>
              </form>
            </div>
          </section>

      </div>
    );
  }
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
