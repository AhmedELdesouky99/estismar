/**
 * Sign Up With Firebase
 */

import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, useHistory } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import { Fab } from "@material-ui/core";
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";
import Select from "react-select";

// components
import { SessionSlider } from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
   signupUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter,
   HandelSignUp
} from 'Actions';

import { useState } from 'react';

 const SignupFirebase =()=>  {
const [user,setUser]=useState()
const dispatch =useDispatch()
const history=useHistory()
   // state = {
   //    name: '',
   //    email: '',
   //    password: ''
   // }

	/**
	 * On User Signup
	 */
   // onUserSignUp() {
   //    const { email, password } = this.state;
   //    if (email !== '' && password !== '') {
   //       this.props.signupUserInFirebase({ email, password }, this.props.history);
   //    }
   // }
   const logo=require('Assets/img/logo-waqf.png')
  const handelClick=()=>{
   dispatch(HandelSignUp(user,history))
  } 
  const {errors} =useSelector(state=>state.authUser)
      return (
         <div className='row' style={{height:"100vh" ,textAlign:"right"}}>
         <div className='col-md-8 col-sm-12' style={{margin:"auto",direction:"rtl",paddingRight:"50px"}}>
               <p className='title-login' style={{position:"relative"}}>
               تسجيل مستخدم جديد
               </p>
               <div className='col-md-5 col-sm-12' id="signup"> 
               <FormGroup>
                 <Label for="exampleSelect">المستخدم الجديد</Label>
                 {
                  <Select options={[{label:"مستشار",value:"advisor"},{label:"مزود خدمة",value:"service-provider"}]} 
                  placeholder="نوع المستخدم"
                  style={{direction:"ltr"}}
                  onChange={(opt)=>{
                     setUser({
                        ...user,
                        category:opt.value
                     })
                  }}
                  />
                
                 }
               </FormGroup>
               </div>
               <div className='col-md-5 col-sm-12'> 
               <p className='title' style={{position:"relative"}}>
               معلومات الحساب
               </p>
               <FormGroup>
                 <Label for="exampleSelect"> اسم المستخدم</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="text"
                   placeholder='اسم المستخدم'
                   style={{ borderColor: "#7EA831" }}
                   onChange={(e)=>{
                     setUser({
                        ...user,
                        name:e.target.value
                     })
                   }}
                 />
                
                 }
               </FormGroup>
               </div>
               <div className='col-md-5 col-sm-12' >
               <FormGroup>
                 <Label for="exampleSelect"> البريد الالكتروني</Label>
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
               <FormGroup>
                 <Label for="exampleSelect">تأكيد كلمة المرور</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="password"
                   placeholder='تأكيد كلمة المرور'
                   style={{ borderColor: "#7EA831" }}
                   onChange={(e)=>{
                     setUser({
                        ...user,
                        password_confirmation:e.target.value
                     })
                   }}
                 />
                
                 }
               </FormGroup>
               </div>
               <div className='col-md-5 col-sm-12 '> 
                  { 
                  errors ? 
                    Object.keys(errors)?.map((key,value)=>(
                      <div className=''> 
                        {errors[key]?.map(err=>(
                        <div className='alert alert-danger'>
                           {err}
                        </div>
                        ))
                        }
                      </div>
                    ))
                    : null
                  }
               </div>
             
               <div className='col-md-5 col-sm-12' style={{gap:"30px"}}>
                 <button onClick={()=>handelClick()} style={{border:"none",background:"#7EA831",color:"#fff",height:"48px",cursor:"pointer"}}>
                 تسجيل   
                 </button>
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
//    const { loading } = authUser;
//    return { loading };
// };

// export default connect(mapStateToProps, {
//    signupUserInFirebase,
//    signinUserWithFacebook,
//    signinUserWithGoogle,
//    signinUserWithGithub,
//    signinUserWithTwitter
// })(SignupFirebase);
export default SignupFirebase
