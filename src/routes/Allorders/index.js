
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
import Orders from "./Allorders"
import OrderDetails from "./OrderDetails"
const AllOrders = ({ match }) => (
  
   <div className="Crm-wrapper">
      <Switch>
         {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
         <Route exact path={`${match.url}/`} component={Orders} />
         <Route exact path={`${match.url}/:id`} component={OrderDetails} />


         
      </Switch>
   </div>
);

export default AllOrders;
