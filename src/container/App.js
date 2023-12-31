/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';

//Horizontal Layout
import HorizontalLayout from './HorizontalLayout';

//Agency Layout
import AgencyLayout from './AgencyLayout';

//Main App
import RctDefaultLayout from './DefaultLayout';

// boxed layout
import RctBoxedLayout from './RctBoxedLayout';

// CRM layout
import CRMLayout from './CRMLayout';

// app signin
import AppSignIn from './SigninFirebase';
import AppSignUp from './SignupFirebase';

// async components
import {
   AsyncSessionLoginComponent,
   AsyncSessionRegisterComponent,
   AsyncSessionLockScreenComponent,
   AsyncSessionForgotPasswordComponent,
   AsyncSessionPage404Component,
   AsyncSessionPage500Component,
   AsyncTermsConditionComponent
} from 'Components/AsyncComponent/AsyncComponent';

//Auth0
import Auth from '../Auth/Auth';

// callback component
import Callback from "Components/Callback/Callback";

//Auth0 Handle Authentication
const auth = new Auth();

const handleAuthentication = ({ location }) => {
   if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
   }
}

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, authUser, ...rest }) =>
   <Route
      {...rest}
      render={props =>
         authUser
            ? <Component {...props} />
            : <Redirect
               to={{
                  pathname: '/signin',
                  state: { from: props.location }
               }}
            />
            // :<Component {...props} />
         }
   />;

const App = ({location, match })=> {
   const {user} =useSelector((state)=>state.authUser)
   // console.log(user,"user karem")
   if (location.pathname === '/') {
      if (user === null) {
         return (<Redirect to={'/app/owners-assets'} />);
      } else {
         if(user?.user?.category =="service-provider" || user?.user?.category =="provider-employee"){
            return  (<Redirect to={`/app/service-provider/${user.user.id}`} />)
         }else if(user?.user.category =="advisor" ){
            return  (<Redirect to={`/app/advisors/${user.user.id}`} />)

         }
         return (<Redirect to={'/app/owners-assets'} />);
      }
   }
      return (
         <RctThemeProvider>
            <NotificationContainer />
            <InitialPath
               path={`${match.url}app`}
               authUser={user}
               component={RctDefaultLayout}
            />
            <Route path="/horizontal" component={HorizontalLayout} />
            <Route path="/agency" component={AgencyLayout} />
            <Route path="/boxed" component={RctBoxedLayout} />
            <Route path="/dashboard" component={CRMLayout} />
            <Route path="/signin" component={AppSignIn} />
            <Route path="/signup" component={AppSignUp} />
            <Route path="/session/login" component={AsyncSessionLoginComponent} />
            <Route path="/session/register" component={AsyncSessionRegisterComponent} />
            <Route path="/session/lock-screen" component={AsyncSessionLockScreenComponent} />
            <Route
               path="/session/forgot-password"
               component={AsyncSessionForgotPasswordComponent}
            />
            <Route path="/session/404" component={AsyncSessionPage404Component} />
            <Route path="/session/500" component={AsyncSessionPage500Component} />
            <Route path="/terms-condition" component={AsyncTermsConditionComponent} />
            <Route path="/callback" render={(props) => {
               handleAuthentication(props);
               return <Callback {...props} />
            }} />
         </RctThemeProvider>
      );
   }


// map state to props
// const mapStateToProps = ({ authUser }) => {
//    const { user } = authUser;
//    return { user };
// };

export default App;
