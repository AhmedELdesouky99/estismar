
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
import AllWallet from "./AllWallet"
import TransactionDetails from './TransactionDetails';
// import OrderDetails from "./OrderDetails"
const Wallet = ({ match }) => (
  
   <div className="Crm-wrapper">
      <Switch>
         {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
         <Route exact path={`${match.url}/`} component={AllWallet} />
         <Route exact path={`${match.url}/:id`} component={TransactionDetails} />


         
      </Switch>
   </div>
);

export default Wallet;
