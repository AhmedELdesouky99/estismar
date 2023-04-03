// /**
//  * Notifications Widget
//  */
// import React, { Fragment, Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { Scrollbars } from 'react-custom-scrollbars';
// import Typography from '@material-ui/core/Typography';

// // api
// import api from 'Api';

// // intl messages
// import IntlMessages from 'Util/IntlMessages';
// import OwnerProfile from './OwnersProfile';
// import ServiceProviderProfile from './ServiceProviderProfile';
// import AdvisorProfile from "./AdvisorProfile"
// import { Box } from '@material-ui/core';
// import Services from '../../routes/AllServices/AllServices';

// function TabContainer({ children, dir }) {
//    return (
//       <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//          {children}
//       </Typography>
//    );
// }

// class TabViews extends Component {

//    state = {
//       value: 0,
//       messages: null,
//       notificationTypes: null,
//       notifications: null
//    };

 

//    // get messages
 

//    // get notification types


//    // get notifications


//    handleChange = (event, value) => {
//       this.setState({ value });
//    };

//    handleChangeIndex = index => {
//       this.setState({ value: index });
//    };

//    /**
//     * Function to return notification name
//     */

   
//    render() {
//       const { theme } = this.props;
//       const { messages, notifications } = this.state;
// console.log(this.state.value,"this.state.value")
// function TabPanel(props) {
//    const { children, value, index, ...other } = props;
 
//    return (
//      <div
//        role="tabpanel"
//        hidden={value !== index}
//        id={`simple-tabpanel-${index}`}
//        aria-labelledby={`simple-tab-${index}`}
//        {...other}
//      >
//        {value === index && (
//          <Box p={3}>
//            <Typography>{children}</Typography>
//          </Box>
//        )}
//      </div>
//    );
//  } 
//       return (
//          <Fragment>
//             <AppBar position="static" color="default" className="mb-2">
//                <Tabs
//                   value={this.state.value}
//                   onChange={this.handleChange}
//                   indicatorColor="primary"
//                   textColor="primary"
//                   variant="fullWidth"
//                >
//                  {
//                   this.props.serviceProvider ? 
//                   <>
//                   <Tab label={<IntlMessages id="البروفايل" />} />
//                    <Tab label={<IntlMessages id="الخدمات" />} />
//                   <Tab label={<IntlMessages id="الباقات" />} />
//                   <Tab label={<IntlMessages id="الاستشارات" />} />
//                   <Tab label={<IntlMessages id="المحفظة" />} />
//                   <Tab label={<IntlMessages id="الفواتير" />} /> 
//                   </>
                 
//                   : this.props.advisor ? 
//                   <>
//                    <Tab label={<IntlMessages id="البروفايل" />} />
//                   <Tab label={<IntlMessages id="الاستشارات" />} />
//                   <Tab label={<IntlMessages id="المحفظة" />} />
//                   <Tab label={<IntlMessages id="الفواتير" />} />
//                   </>
                  
//                   :
//                  <>
//                 <Tab label={<IntlMessages id="البروفايل" />} />
//                   <Tab  onClick={()=>this.handleChangeIndex} label={<IntlMessages id="الخدمات" />} />
//                   <Tab label={<IntlMessages id="الباقات" />} />
//                   <Tab label={<IntlMessages id="الاستشارات" />} />
//                   <Tab label={<IntlMessages id="المحفظة" />} />
//                   <Tab label={<IntlMessages id="الفواتير" />} /> 
//                  </>
//                  }
//                </Tabs>
//             </AppBar>
//             {/* <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={375} autoHide> */}
//                {/* <SwipeableViews
//                   axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                   index={this.state.value}
//                   onChangeIndex={this.handleChangeIndex}>
               
//                </SwipeableViews> */}
//                   <div className="card mb-2 notification-box">
//                      <TabContainer dir={theme.direction}>
                       
//                         <TabPanel value={this.state.value} index={0}>
//                         {
//                            this.props.serviceProvider ? 
//                            <ServiceProviderProfile providerDetails={this.props.providerDetails}/>
//                            : 
//                            this.props.advisor ? 
//                            <AdvisorProfile advisorDetails={this.props.advisorDetails}/> 
//                            :
//                         <OwnerProfile ownerDetails={this?.props?.ownerDetails}/> 

//                         }
//                         </TabPanel>
//                         <TabPanel value={this.state.value} index={1}>
//                            <Services inTabs={true}/>
//                         </TabPanel>
                        
//                      </TabContainer>
//                   </div>
//             {/* </Scrollbars> */}
//          </Fragment>
//       );
//    }
// }

// export default withStyles(null, { withTheme: true })(TabViews);

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OwnerProfile from './OwnersProfile';
import ServiceProviderProfile from './ServiceProviderProfile';
import AdvisorProfile from "./AdvisorProfile"
import Services from '../../routes/AllServices/AllServices';
import AssetsService from "../../routes/owner-assets/AssetsService"
import AllTeam from '../../routes/service-providers/AllTeam';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  ChangeRoute
} from 'Actions';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsView(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
const {user}=useSelector(state=>state.authUser.user)
const {sidebar}=useSelector(state=>state)
const dispatch=useDispatch()

  console.log(user,"user")
  // console.log(st,"statered")
  const handleChange = (event, newValue) => {
    dispatch(ChangeRoute(newValue))
    setValue(newValue);
  };
// useEffect(()=>{

// },[sidebar.index])

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{display:user.category =="service-provider" ? "none" :""}}>
     

         {
              props.serviceProvider ? 
              <Tabs value={sidebar.index} onChange={handleChange} aria-label="simple tabs example" style={{justifyContent:"space-between"}}>
              <Tab label="البروفايل" {...a11yProps(0)} />
              <Tab label="الخدمات" {...a11yProps(1)} />
              <Tab label="الباقات" {...a11yProps(2)} />
              <Tab label="فريق العمل" {...a11yProps(3)} />
              <Tab label="المحفظة" {...a11yProps(4)} />
              <Tab label="الفواتير" {...a11yProps(5)} />
              <Tab label="المراجعات" {...a11yProps(6)} />
              </Tabs>
            : 
            props.advisor ? 
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  style={{justifyContent:"space-between"}}>
            <Tab label="البروفايل" {...a11yProps(0)} />
            <Tab label="الاستشارات" {...a11yProps(1)} />
            <Tab label="المحفظة" {...a11yProps(2)} />
            <Tab label="الفواتير" {...a11yProps(3)} />
           </Tabs>
          :
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{justifyContent:"space-between"}}>
          <Tab label="البروفايل" {...a11yProps(0)} />
          <Tab label="الخدمات" {...a11yProps(1)} />
          <Tab label="باقات" {...a11yProps(2)} />
          <Tab label="استشارات" {...a11yProps(3)} />
          <Tab label="المحفظة" {...a11yProps(4)} />
          <Tab label="الفواتير" {...a11yProps(5)} />
          </Tabs>

         }
           
       
      </AppBar>
      <TabPanel value={sidebar.index} index={0}>
      {
                          props.serviceProvider ? 
                            <ServiceProviderProfile providerDetails={props.providerDetails}/>
                            : 
                           props.advisor ? 
                            <AdvisorProfile advisorDetails={props.advisorDetails}/> 
                            :
                         <OwnerProfile ownerDetails={props?.ownerDetails}/> 

                         }
      </TabPanel>
      <TabPanel value={sidebar.index} index={1}>
        {
             props.serviceProvider ? 
             <Services inTabs={true}/> : 
             props?.ownerDetails ? 
             <AssetsService />
             : null
        }
     
      </TabPanel>
      <TabPanel value={sidebar.index} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={sidebar.index} index={3}>
        {/* <AllTeam /> */}
      </TabPanel>
    </div>
  );
}
