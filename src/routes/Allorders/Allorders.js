import React, { useEffect, useState } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios";
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import OrderList from "./orderList";
import { useSelector } from "react-redux";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
export default function Orders({inTabs}) {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [owners, setOwners] = useState();
  const [status, setStatus] = useState();
  const [query, setQuery] = useState({});
  const {id}=useParams()
	const {user}=useSelector(state=>state.authUser.user)
  
  useEffect(()=>{
    console.log(user,"user")
    if(user.category =="service-provider"){
      const clienturl= axios.create({
        baseURL: "https://estithmar.arabia-it.net/api",
      });
      clienturl.get(`/provider/request`,{
        params:{
          limit,
          token:localStorage.getItem("token"),
          page,
          status: query.status ? query.status : undefined,
        }
      }).then(res=>setOwners(res.data.data))
    }else{
      client.get(`/service-request`,{
        params:{
          limit,
          page,
          service_provider_id: id && location.pathname.includes("service-provider") ? id : user?.category =="service-provider" || user?.category =="provider-employee" ? user?.id :  query.service_provider_id ? query.service_provider_id : undefined,
          status: query.status ? query.status : undefined,
        }
      }).then(res=>setOwners(res.data.data))
    }
    
},[page,limit,query])
console.log(user,"user")
  return (
    <div className="clients-wrapper">
     {
      !inTabs ? 
          <>
               <Helmet>
      <title>{"الطلبات"}</title>
    </Helmet>
    <PageTitleBar
      title={<IntlMessages id="orders" />}
      match={location}
      enableBreadCrumb
    />
          </>
      :
      null  
     }
      {
        !inTabs ? 
        
        <div className="row">
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#00A8FF1A" name={"اجمالي الخدمات"} />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#23D3811A" name="خدمات متاحة" />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#EEB6561A" name="قيد الانتظار" />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#FF04041A" name="خدمات متوقفة" />
        </div>
      </div>
        
        :
        null

      }
 
      <RctCard>
        <RctCardContent>
            {
              !inTabs ? 
                <>
                   <div className="row justify-content-between">
              <div className="col-sm-12 col-md-6 mt-1">قائمة الطلبات</div>
            </div>
            <hr />
            <div className="row">
              <FiltersAndSearches
                make="make"
                submitbtnid="search.filter"
               
                filters={["status","service_provider"]}
                query={query}
                setPage={setPage}
                setQuery={setQuery}
              
              />
            </div>
                </>

              
              : 
              <div className="row">
              <FiltersAndSearches
                make="make"
                submitbtnid="search.filter"
               
                filters={ id ?  ["parent","status","fields","support"] : ["parent","status","fields","service_provider"]}
                query={query}
                setPage={setPage}
                setQuery={setQuery}
              
              />
            </div>
            }
       
        </RctCardContent>
      </RctCard>
      <OrderList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allowners={owners}
        status={status}
      />
    </div>
  );
}
