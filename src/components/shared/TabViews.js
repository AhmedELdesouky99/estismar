/**
 * Notifications Widget
 */
import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Scrollbars } from 'react-custom-scrollbars';
import Typography from '@material-ui/core/Typography';

// api
import api from 'Api';

// intl messages
import IntlMessages from 'Util/IntlMessages';
import OwnerProfile from './OwnersProfile';
import ServiceProviderProfile from './ServiceProviderProfile';

function TabContainer({ children, dir }) {
   return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
         {children}
      </Typography>
   );
}

class TabViews extends Component {

   state = {
      value: 0,
      messages: null,
      notificationTypes: null,
      notifications: null
   };

   componentDidMount() {
      this.getMessages();
      this.getNotificationTypes();
      this.getNotifications();
   }

   // get messages
   getMessages() {
      api.get('messages.js')
         .then((response) => {
            this.setState({ messages: response.data });
         })
         .catch(error => {
            console.log(error);
         })
   }

   // get notification types
   getNotificationTypes() {
      api.get('notificationTypes.js')
         .then((response) => {
            this.setState({ notificationTypes: response.data });
         })
         .catch(error => {
            console.log(error);
         })
   }

   // get notifications
   getNotifications() {
      api.get('notifications.js')
         .then((response) => {
            this.setState({ notifications: response.data });
         })
         .catch(error => {
            console.log(error);
         })
   }

   handleChange = (event, value) => {
      this.setState({ value });
   };

   handleChangeIndex = index => {
      this.setState({ value: index });
   };

   /**
    * Function to return notification name
    */
   getNotificationName(notificationId) {
      const { notificationTypes } = this.state;
      if (notificationTypes) {
         for (const notificationType of notificationTypes) {
            if (notificationId === notificationType.id) {
               return (
                  <span className={`text-${notificationType.class} mr-5`}>
                     <i className={`zmdi zmdi-${notificationType.icon}`}></i> {notificationType.Name}
                  </span>
               );
            }
         }
      }
   }

   render() {
      const { theme } = this.props;
      const { messages, notifications } = this.state;
      return (
         <Fragment>
            <AppBar position="static" color="default" className="mb-2">
               <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
               >
                  <Tab label={<IntlMessages id="البروفايل" />} />
                  <Tab label={<IntlMessages id="الخدمات" />} />
                  <Tab label={<IntlMessages id="الباقات" />} />
                  <Tab label={<IntlMessages id="الاستشارات" />} />
                  <Tab label={<IntlMessages id="المحفظة" />} />
                  <Tab label={<IntlMessages id="الفواتير" />} />
               </Tabs>
            </AppBar>
            {/* <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={375} autoHide> */}
               <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={this.state.value}
                  onChangeIndex={this.handleChangeIndex}>
                  <div className="card mb-2 notification-box">
                     <TabContainer dir={theme.direction}>
                        {
                           this.props.serviceProvider ? 
                           <ServiceProviderProfile providerDetails={this.props.providerDetails}/>
                           : 
                        <OwnerProfile ownerDetails={this?.props?.ownerDetails}/> 

                        }
                     </TabContainer>
                  </div>
               </SwipeableViews>
            {/* </Scrollbars> */}
         </Fragment>
      );
   }
}

export default withStyles(null, { withTheme: true })(TabViews);
