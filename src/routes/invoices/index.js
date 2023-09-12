
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
import Myinvoices from './Myinvoices';
import MyInvoiceDetails from './MyInvoiceDetails';
// import OrderDetails from "./OrderDetails"
const MyInvoices = ({ match }) => (
  
   <div className="Crm-wrapper">
      <Switch>
         {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
         <Route exact path={`${match.url}/`} component={Myinvoices} />
         <Route exact path={`${match.url}/:id`} component={MyInvoiceDetails} />


         
      </Switch>
   </div>
);

export default MyInvoices;
