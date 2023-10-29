// /** Branches Page */
// import React, { useEffect, useState } from "react";
// import { useLocation, useHistory } from "react-router-dom";
// import { Helmet } from "react-helmet";
// // page title bar
// import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
// import IntlMessages from "Util/IntlMessages";

// import OwnersList from "./ownersList";
// import { RctCard, RctCardContent } from "Components/RctCard";
// import CustomCard from "Components/shared/CustomCard";

// import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
// import axios from "axios"
// import { Button } from "reactstrap";
// import { FormattedMessage } from "react-intl";
// const client = axios.create({
//   baseURL: "https://admin.waqfnami.com/api/admin" 
 
// });
// export default function ServiceProviders() {
//   const location = useLocation();
//   const history = useHistory();
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [owners,setOwners]=useState()
//   const [status,setStatus]=useState()

//   useEffect(()=>{
//     client.get(`/asset-owner?limit=${limit}`).then(res=>setOwners(res.data.data,"res"))
//     client.get("/asset-owner-status").then((res)=>setStatus(res.data.data))

//   },[])
//   return (
//     <div className="clients-wrapper">
//       <Helmet>
//         <title>{"sidebar.الأوقاف"}</title>
//       </Helmet>
//       <PageTitleBar
//         title={<IntlMessages id="الأوقاف" />}
//         match={location}
//         enableBreadCrumb
//         // extraButtons={
//         //   <>
//         //     {userCan("branches.create") && (
//         //       <Button
//         //         variant="contained"
//         //         color="primary"
//         //         className="mx-sm-15 btn btn-success"
//         //         onClick={() => history.push("ServiceProviders/add")}
//         //       >
//         //         <IntlMessages id="create.new.something" values={{ something: messages?.banner }} />
//         //       </Button>
//         //     )}
//         //   </>
//         // }
//       />
//       <div className="row">
//         <div className="col-lg-3 col-md-3">
//           <CustomCard color="#00A8FF1A" name={"أوقاف مسجلة"}/>
//         </div>
//         <div className="col-lg-3 col-md-3">
//           <CustomCard color="#23D3811A" name="مكتملين"/>
//         </div>
//         <div className="col-lg-3 col-md-3">
//           <CustomCard color="#EEB6561A" name="مرفوض"/>
//         </div>
       
      
//       </div>
//       <RctCard>
//         <RctCardContent>
//           <div className="row justify-content-between">
//           <div className="col-sm-12 col-md-3 mt-1">
//           قائمة الأوقاف
//             </div>
//             <div className="col-sm-12 col-md-3 mt-1">
//             <Button
//             variant="contained"
//             color="primary"
//             className="mx-smt-15 btn  mr-1 ml-1 border-0"
//             onClick={()=>history.push("/app/owners-assets/add")}
          
//           >
//             <span className="mr-1 ml-1">
//               <FormattedMessage id={"إضافة وقف"} />
//             </span>
//           </Button>
              
//             </div>
//           </div>
//           <hr />
//           <div className="row">
          
//                   <FiltersAndSearches
//                     make="make"
//                     submitbtnid="search.filter"
//                     fields={[{ type: "search", name: "اسم الوقف" },{ type: "search", name: "الحاله" }]}
//                     filters={["parent"]}
//                     model="model"
//                     is_active="isActive"
//                     multi
//                   />
//                 </div>
//         </RctCardContent>
//       </RctCard>
//       <OwnersList
//         loading={false}
//         setPage={setPage}
//         setLimit={setLimit}
//         limit={limit}
//         allowners={owners}
//         status={status}
//       />
//     </div>
//   );
// }
/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components

import ServiceProvidersComponent from "./ServiceProviders"
import AddEditServiceProvider from "./AddEditServiceProvider/index"
const ServiceProviders = ({ match }) => (
  
   <div className="Crm-wrapper">
      <Switch>
         {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
         <Route exact path={`${match.url}/`} component={ServiceProvidersComponent} />
         <Route exact path={`${match.url}/add`} component={AddEditServiceProvider} />
       
         <Route exact path={`${match.url}/:id`} component={AddEditServiceProvider} />


         
      </Switch>
   </div>
);

export default ServiceProviders;
