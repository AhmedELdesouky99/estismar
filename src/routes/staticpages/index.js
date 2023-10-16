
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
   AsyncCrmComponent,
   AsyncProjectsComponent,
   AsyncProjectDetailComponent,
   AsyncClientsComponent,
   AsyncReportsComponent
} from 'Components/AsyncComponent/AsyncComponent';
// import TransactionDetails from './TransactionDetails';

import StaticPagesComponent from './StaticPages';
import AddEditStaticPage from './AddEditStaticPage';
// import OrderDetails from "./OrderDetails"
const StaticPages = ({ match }) => (
  
   <div className="Crm-wrapper">
      <Switch>
         {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
         <Route exact path={`${match.url}/`} component={StaticPagesComponent} />
         <Route exact path={`${match.url}/:id`} component={AddEditStaticPage} />


         
      </Switch>
   </div>
);

export default StaticPages;
