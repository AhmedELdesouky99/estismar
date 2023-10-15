/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, useHistory } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import { Fab } from "@material-ui/core";
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";

// components
import {
   SessionSlider
} from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
   signinUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter,
   HandelSignin
} from 'Actions';

//Auth File
import Auth from '../Auth/Auth';
import ServiceProviderDropDown from '../components/shared/ServiceProviderDropDown';
import { useState } from 'react';

const Signin =()=>{
   const dispatch=useDispatch()
   const history=useHistory()
  const {errors} =useSelector(state=>state.authUser)

      const [user,setUser] =useState({
         email:"",
         password:"",
         user_category : "dashboard",

      })
   // state = {
   //    email: 'demo@example.com',
   //    password: 'test#123'
   // }

	// /**
	//  * On User Login
	//  */
   // onUserLogin() {
   //    if (this.state.email !== '' && this.state.password !== '') {
   //       this.props.signinUserInFirebase(this.state, this.props.history);
   //    }
   // }

	// /**
	//  * On User Sign Up
	//  */
   // onUserSignUp() {
   //    this.props.history.push('/signup');
   // }

   // //Auth0 Login
   // loginAuth0() {
   //    auth.login();
   // }


   const logo=require('Assets/img/img-logo.png')
const handelClick=()=>{
   dispatch(HandelSignin(user,history))
}
      return (
         // <QueueAnim type="bottom" duration={2000}>
         //    <div className="rct-session-wrapper">
         //       {loading &&
         //          <LinearProgress />
         //       }
         //       <AppBar position="static" className="session-header">
         //          <Toolbar>
         //             <div className="container">
         //                <div className="d-flex justify-content-between">
         //                   <div className="session-logo">
         //                      <Link to="/">
         //                         <img src={AppConfig.appLogo} alt="session-logo" className="img-fluid" width="110" height="35" />
         //                      </Link>
         //                   </div>
         //                   <div>
         //                      <a className="mr-15" onClick={() => this.onUserSignUp()}>Create New account?</a>
         //                      <Button variant="contained" className="btn-light" onClick={() => this.onUserSignUp()}>Sign Up</Button>
         //                   </div>
         //                </div>
         //             </div>
         //          </Toolbar>
         //       </AppBar>
         //       <div className="session-inner-wrapper">
         //          <div className="container">
         //             <div className="row row-eq-height">
         //                <div className="col-sm-7 col-md-7 col-lg-8">
         //                   <div className="session-body text-center">
         //                      <div className="session-head mb-30">
         //                         <h2 className="font-weight-bold">Get started with {AppConfig.brandName}</h2>
         //                         <p className="mb-0">Most powerful ReactJS admin panel</p>
         //                      </div>
         //                      <Form>
         //                         <FormGroup className="has-wrapper">
         //                            <Input
         //                               type="mail"
         //                               value={email}
         //                               name="user-mail"
         //                               id="user-mail"
         //                               className="has-input input-lg"
         //                               placeholder="Enter Email Address"
         //                               onChange={(event) => this.setState({ email: event.target.value })}
         //                            />
         //                            <span className="has-icon"><i className="ti-email"></i></span>
         //                         </FormGroup>
         //                         <FormGroup className="has-wrapper">
         //                            <Input
         //                               value={password}
         //                               type="Password"
         //                               name="user-pwd"
         //                               id="pwd"
         //                               className="has-input input-lg"
         //                               placeholder="Password"
         //                               onChange={(event) => this.setState({ password: event.target.value })}
         //                            />
         //                            <span className="has-icon"><i className="ti-lock"></i></span>
         //                         </FormGroup>
         //                         <FormGroup className="mb-15">
         //                            <Button
         //                               color="primary"
         //                               className="btn-block text-white w-100"
         //                               variant="contained"
         //                               size="large"
         //                               onClick={() => this.onUserLogin()}
         //                            >
         //                               Sign In
         //                    			</Button>
         //                         </FormGroup>
         //                         <FormGroup className="mb-15">
         //                            <Button
         //                               variant="contained"
         //                               className="btn-info btn-block text-white w-100"
         //                               size="large"
         //                               onClick={() => this.loginAuth0()}
         //                            >
         //                               Sign In With Auth0
         //                    			</Button>
         //                         </FormGroup>
         //                      </Form>
         //                      <p className="mb-20">or sign in with</p>
         //                      <Fab size="small" variant="round" className="btn-facebook mr-15 mb-20 text-white"
         //                         onClick={() => this.props.signinUserWithFacebook(this.props.history)}
         //                      >
         //                         <i className="zmdi zmdi-facebook"></i>
         //                      </Fab>
         //                      <Fab size="small" variant="round" className="btn-google mr-15 mb-20 text-white"
         //                         onClick={() => this.props.signinUserWithGoogle(this.props.history)}
         //                      >
         //                         <i className="zmdi zmdi-google"></i>
         //                      </Fab>
         //                      <Fab size="small" variant="round" className="btn-twitter mr-15 mb-20 text-white"
         //                         onClick={() => this.props.signinUserWithTwitter(this.props.history)}
         //                      >
         //                         <i className="zmdi zmdi-twitter"></i>
         //                      </Fab>
         //                      <Fab size="small" variant="round" className="btn-instagram mr-15 mb-20 text-white"
         //                         onClick={() => this.props.signinUserWithGithub(this.props.history)}
         //                      >
         //                         <i className="zmdi zmdi-github-alt"></i>
         //                      </Fab>
         //                      <p className="text-muted">By signing up you agree to {AppConfig.brandName}</p>
         //                      <p className="mb-0"><a target="_blank" href="#/terms-condition" className="text-muted">Terms of Service</a></p>
         //                   </div>
         //                </div>
         //                <div className="col-sm-5 col-md-5 col-lg-4">
         //                   <SessionSlider />
         //                </div>
         //             </div>
         //          </div>
         //       </div>
         //    </div>
         // </QueueAnim>
         <div className='row' style={{height:"100vh" ,textAlign:"right",direction:"ltr"}}>
            <div className='col-md-8 col-sm-12' style={{margin:"auto",direction:"rtl",padding:"50px"}}>
                  <p className='title-login' style={{position:"relative"}}>
                  تسجيل دخول
                  </p>
                  <div className='col-md-5 col-sm-12'> 
                  <FormGroup>
                    <Label for="exampleSelect">البريد الالكتروني</Label>
                    {
                      <Input
                      id="exampleSelect"
                      name="select"
                      type="email"
                      placeholder='البريد الالكتروني'
                      style={{ borderColor: "#7EA831" }}
                      onChange={(e)=>{
                        setUser({
                           ...user,
                           email:e.target.value
                        })
                      }}
                    />
                   
                    }
                  </FormGroup>
                  </div>
                  <div className='col-md-5 col-sm-12'> 
                  <FormGroup>
                    <Label for="exampleSelect">كلمة المرور</Label>
                    {
                      <Input
                      id="exampleSelect"
                      name="select"
                      type="password"
                      placeholder='كلمة المرور'
                      style={{ borderColor: "#7EA831" }}
                      onChange={(e)=>{
                        setUser({
                           ...user,
                           password:e.target.value
                        })
                      }}
                    />
                   
                    }
                  </FormGroup>
                  </div>
                  <div className='col-md-5 col-sm-12'>
                     <div className='row justify-content-between m-0'>
                        <p>
                        تذكرني
                        </p>
                        {/* <Link to="/" style={{color:"#150941"}}>
                        نسيت اسم المستخدم / كلمة المرور
                        </Link> */}
                     </div>
                  </div>
                  {
                     errors ? <div className='col-md-5 col-sm-12 alert alert-danger'>
                              {errors}
                        </div> :null
                  }
                  <div className='col-md-5 col-sm-12' style={{gap:"30px"}}>
                      
                    <button 
                    disabled={!user.password.length || !user.email.length}
                    onClick={()=>handelClick()}style={{border:"none",background:"#7EA831",color:"#fff",height:"48px",cursor:"pointer"}}>
                        دخول   
                    </button>
                    <hr style={{background:"#707070" ,margin:"20px"}}/>
                  </div>
                  <div className='row m-0' style={{gap:"30px"}}>
                   <span>
                   ليس لدي حساب؟ 
                   </span>
                   <Link to="/signup" style={{color:"#150941"}}>
                   إنشاء حساب
                   </Link>
                  </div>
            </div>
            <div className='col-md-4 col-sm-12 logo' style={{backgroundColor:"#150941"}}>
                  <img src={logo} className="m-auto"/>
            </div>

         </div>
      );
   }


// map state to props
// const mapStateToProps = ({ authUser }) => {
//    const { user, loading } = authUser;
//    return { user, loading }
// }

export default Signin;
