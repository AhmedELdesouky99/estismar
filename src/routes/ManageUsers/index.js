
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components

import Users from "./Users"
import AddEditUser from "./AddEditUser/index"
import AddEditRole from "./AddEditRole/index"

import Roles from "./Roles"
const ManageUsers = ({ match }) => (
  
   <div className="Crm-wrapper">
      <Switch>
        {console.log(match,"match")}
         {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
         <Route exact path={`${match.url}/`} component={Users} />
         <Route exact path={`${match.url}/add-user`} component={AddEditUser} />
         <Route exact path={`${match.url}/roles`} component={Roles} />
         <Route exact path={`${match.url}/roles/add-role`} component={AddEditRole} />
         <Route exact path={`${match.url}/roles/:id`} component={AddEditRole} />



       
         <Route exact path={`${match.url}/:id`} component={AddEditUser} />


         
      </Switch>
   </div>
);

export default ManageUsers;
