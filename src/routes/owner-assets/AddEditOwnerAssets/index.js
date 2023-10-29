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

import SharedProfileInfo from "Components/shared/SharedProfileInfo";

const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin" 
 
});
export default function AddEditOwnersAssets() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);

  const { id } = useParams();

  const [limit, setLimit] = useState(10);
  const [ownerDetails,setOwnerDetails]=useState()
  const [status,setStatus]=useState()

  useEffect(()=>{
    // client.get(`/asset-owner?limit=${limit}`).then(res=>setOwners(res.data.data,"res"))
    // client.get("/asset-owner-status").then((res)=>setStatus(res.data.data))
    if(id){
        client.get(`/asset-owner/${id}`).then(res=>setOwnerDetails(res.data.data))
       
    }

  },[id])
  console.log(ownerDetails,"ownerDetails")
  return (
    <div className="clients-wrapper">
       <Helmet>
         <title>{ id ?   ownerDetails?.asset_name_ar:"اضافة وقف "}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id={ id ?  ownerDetails?.asset_name_ar:"اضافة وقف "}/>}
         match={location}
         enableBreadCrumb
         lastElement= { id ?  ownerDetails?.asset_name_ar: "اضافة وقف "}
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
        <div className="col-lg-3 col-md-2">
          <CustomCard color="#00A8FF1A" name={"خدمات مكتملة"}/>
        </div>
        <div className="col-lg-3 col-md-2">
          <CustomCard color="#EEB6561A" name="استشارات"/>
        </div>
        <div className="col-lg-2 col-md-2">
          <CustomCard color="#23D3811A" name="مدفوعات"/>
        </div>
        <div className="col-lg-2 col-md-2">
          <CustomCard color="#23D3811A" name="دعم خدمات"/>
        </div>
        <div className="col-lg-2 col-md-2">
          <CustomCard color="#FF04041A" name="خدمات متوقفة"/>
        </div>
       
      
      </div>
      <SharedProfileInfo providerDetails={ownerDetails} isAssetOwner={true}/>
     
      <TabViews  ownerDetails={ownerDetails}/>
    </div>
  );
}
