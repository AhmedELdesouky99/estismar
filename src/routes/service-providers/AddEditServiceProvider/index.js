import React, { useEffect, useState } from "react";
import { useLocation, useHistory ,useParams} from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios"
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { NotificationV2 } from "../../../components/Widgets";
import TabViews from "Components/shared/TabViews";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function AddEditOwnersAssets() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);

  const { id } = useParams();

  const [limit, setLimit] = useState(10);
  const [providerDetails,setProviderDetails]=useState()
  const [status,setStatus]=useState()

  useEffect(()=>{
    // client.get(`/asset-owner?limit=${limit}`).then(res=>setOwners(res.data.data,"res"))
    // client.get("/asset-owner-status").then((res)=>setStatus(res.data.data))
    if(id){
        client.get(`/service-provider/${id}`).then(res=>setProviderDetails(res.data.data))
       
    }

  },[id])
  return (
    <div className="clients-wrapper">
       <Helmet>
         <title>{"sidebar.الأوقاف"}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id="الأوقاف" />}
         match={location}
         enableBreadCrumb
         // extraButtons={
         //   <>
         //     {userCan("branches.create") && (
         //       <Button
         //         variant="contained"
         //         color="primary"
         //         className="mx-sm-15 btn btn-success"
         //         onClick={() => history.push("ServiceProviders/add")}
         //       >
         //         <IntlMessages id="create.new.something" values={{ something: messages?.banner }} />
         //       </Button>
         //     )}
         //   </>
        // }
      />
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#00A8FF1A" name={"الخدمات المعروضة"}/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#23D3811A" name="إجمالي الأرباح"/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#EEB6561A" name="فريق العمل"/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#FF04041A" name="خدمات متوقفة"/>
        </div>
        
       
      
      </div>
      <RctCard>
        <RctCardContent>

     
        </RctCardContent>
      </RctCard>
      <TabViews serviceProvider={true} providerDetails={providerDetails}/>
    </div>
  );
}
