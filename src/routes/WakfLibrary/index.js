
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
import WakfTabs from './WakfTabs';

const WakfLibrary = ({ match }) => (
  
   <div className="Crm-wrapper">
      <Switch>
         {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
         <Route exact path={`${match.url}/`} component={WakfTabs} />
         {/* <Route exact path={`${match.url}/:id`} component={OrderDetails} /> */}


         
      </Switch>
   </div>
);

export default WakfLibrary;
